import { SafeAreaView, Text, View, Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import axios from "axios";

// Styles imports
import offerCardStyles from "../assets/styles/offerCardStyles";

// Utils functions imports
import setRatings from "../utils/setRatings";

export default function OfferScreen() {
    const route = useRoute();
    const {id} = route.params;

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${id}`);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    // console.log(data);

    return isLoading ? (
        <Text>Loading...</Text>
    ) : (
        <SafeAreaView style={globalStyles.pageContainer}>
        <View style={globalStyles.header}>
          <Image style={globalStyles.headerLogo} source={require("../assets/airbnb-logo.png")}/>
        </View>
        <View>
            <View style={offerCardStyles.cardHeader}>
                <Image style={offerCardStyles.coverImage} source={{uri: data.photos[0].url}}/>
                <Text style={offerCardStyles.price}>{data.price} €</Text>
            </View>
            <View style={{paddingHorizontal: 16}}>
                <View style={offerCardStyles.cardBody}>
                    <View style={offerCardStyles.titleRating}>
                    <Text numberOfLines={1} style={offerCardStyles.title}>{data.title}</Text>
                        <View style={offerCardStyles.ratingContainer}>
                        {setRatings(data.ratingValue)}
                        <Text style={offerCardStyles.reviewsAmount}>({data.reviews} reviews)</Text>
                        </View>
                    </View>
                    <Image 
                    style={offerCardStyles.userAvatar} 
                    source={{uri: data.user.account.photo.url}} 
                    />
                </View>
                <Text>{data.description}</Text>
            </View>
        </View>
        </SafeAreaView>
    )
}