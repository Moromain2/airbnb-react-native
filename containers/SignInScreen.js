// Modules imports
import { ActivityIndicator, SafeAreaView, Text, View, Image } from "react-native";
import { useState } from "react";
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import uuid from 'react-native-uuid'; // Token generation

// Components imports
import Input from "../components/input";
import CtaButton from "../components/cta-button";
import Link from "../components/link";

// Styles imports
import signUpStyles from "../assets/styles/signUpStyles";

export default function SignInScreen({ setToken }) {
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error");
  const [requestProcessing, setRequestProcessing] = useState(false);

  const handleSubmit = async () => {
    setRequestProcessing(true);
    if (password && email) {
      const token = uuid.v4(); // Creating a random string to be assigned to userToken at the end of the request
      setFormErrors(false);
      try {
        const response = await axios.post("https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in", {
          "email": email,
          "password": password
        });
        const data = response.data;
        setToken(token);
        alert("Connection successful");
      } catch (error) {
        console.log(error);
        setErrorMessage("Wrong password and/or email");
        setFormErrors(true);
      }
    } else {
      setErrorMessage("Please fill all fields");
      setFormErrors(true);
    }
    setRequestProcessing(false);
  }

  return (
    <SafeAreaView style={signUpStyles.pageContainer}>
      <KeyboardAwareScrollView>
        <View style={signUpStyles.pageHeader}>
          <Image source={require("../assets/airbnb-logo.png")} style={signUpStyles.logo}/>
          <Text style={signUpStyles.heading1}>Sign in</Text>
        </View>
        <View style={signUpStyles.formContainer}>
            <Input 
              placeholder="email" 
              input={email} 
              setInput={setEmail} 
            />
            <Input 
              placeholder="password" 
              input={password} 
              secureEntry={true}
              setInput={setPassword} 
            />
        </View>
        {formErrors &&
          <Text style={signUpStyles.error}>{errorMessage}</Text>
        }
        {requestProcessing ? 
          <ActivityIndicator size={"large"} style={signUpStyles.loader} /> :
          <CtaButton text="Sign in" action={() => {handleSubmit()}}/>
        }
        <View style={signUpStyles.pageFooter}>
          <Link text="No account? Register" route="SignUp" />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
