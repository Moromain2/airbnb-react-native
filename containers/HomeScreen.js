import { useNavigation } from "@react-navigation/core";
import { ActivityIndicator, FlatList, Image, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import axios from "axios"

// Styles imports
import globalStyles from "../assets/styles/globalStyles";
import offerCardStyles from "../assets/styles/offerCardStyles";

// Utils functions imports
import setRatings from "../utils/setRatings";

export default function HomeScreen() {
  const navigation = useNavigation();

  // Data related states
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Fetching data when component renders
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={globalStyles.pageContainer}>
        <View style={globalStyles.header}>
          <Image style={globalStyles.headerLogo} source={require("../assets/airbnb-logo.png")}/>
        </View>
        <View>
          {isLoading ?
            <ActivityIndicator /> :
            <FlatList
              style={{marginBottom: 32}}
              data={data}
              keyExtractor={item => String(item._id)}
              renderItem={({item}) => {
                return (
                  <Pressable 
                    onPress={() => {navigation.navigate("Offer", {id: item._id})}}
                    style={offerCardStyles.cardContainer}
                  >
                    <View style={offerCardStyles.cardHeader}>
                      <Image style={offerCardStyles.coverImage} source={{uri: item.photos[0].url}}/>
                      <Text style={offerCardStyles.price}>{item.price} €</Text>
                    </View>
                    <View style={offerCardStyles.cardBody}>
                      <View style={offerCardStyles.titleRating}>
                        <Text numberOfLines={1} style={offerCardStyles.title}>{item.title}</Text>
                          <View style={offerCardStyles.ratingContainer}>
                            {setRatings(item.ratingValue)}
                            <Text style={offerCardStyles.reviewsAmount}>({item.reviews} reviews)</Text>
                          </View>
                      </View>
                      <Image 
                        style={offerCardStyles.userAvatar} 
                        source={{uri: item.user.account.photo.url}} 
                      />
                    </View>
                  </Pressable>
                )
              }}
            />
          }
        </View>

        {/* <Button
          title="Go to Profile"
          onPress={() => {
            navigation.navigate("Profile", { userId: 123 });
          }}
        /> */}
    </SafeAreaView>
  );
}
