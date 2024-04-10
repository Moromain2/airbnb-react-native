// Modules imports
import { ActivityIndicator, SafeAreaView, Text, View, Image } from "react-native";
import { useState } from "react";
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import uuid from 'react-native-uuid'; // Token generation

// Components imports
import Input from "../components/input";
import CtaButton from "../components/cta-button";
import Link from "../components/link";

// Styles imports
import signUpStyles from "../assets/styles/signUpStyles";

export default function SignUpScreen({ setToken }) {
  // Form states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error");
  const [requestProcessing, setRequestProcessing] = useState(false);

  const handleSubmit = async () => {
    setRequestProcessing(true);
    if (email && description && username && password && confirmPassword ) {
      if (password === confirmPassword) {
        const token = uuid.v4(); // Creating a random string to be assigned to userToken at the end of the request
        setFormErrors(false);
        try {
          const response = await axios.post("https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up", {
            "email": email,
            "username": username,
            "description": description,
            "password": password
          })
          const data = response.data;
          // Using the setToken function passed as a props to set the userToken when request is sucessfull
          setToken(token);
          alert("Account created 🔥");
        } catch (error) {
          setErrorMessage("User already exists");
          setFormErrors(true);
        }
      } else {
        setErrorMessage("Passwords don't match");
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
          <Text style={signUpStyles.heading1}>Sign up</Text>
        </View>
        <View style={signUpStyles.formContainer}>
            <Input 
              placeholder="email" 
              input={email} 
              setInput={setEmail} 
            />
            <Input 
              placeholder="username" 
              input={username} 
              setInput={setUsername} 
            />
            <Input
              textArea={true}
              placeholder="Describe yourself in a few words..."
              input={description}
              setInput={setDescription}
            />
            <Input
              placeholder="Password"
              input={password}
              setInput={setPassword}
              secureEntry={true}
            />
            <Input
              placeholder="Confirm password"
              input={confirmPassword}
              setInput={setConfirmPassword}
              secureEntry={true}
            />
        </View>
        {formErrors &&
          <Text style={signUpStyles.error}>{errorMessage}</Text>
        }
        {requestProcessing ? 
          <ActivityIndicator size={"large"} style={signUpStyles.loader} /> :
          <CtaButton text="Sign up" action={() => {handleSubmit()}}/>
        }
        <View style={signUpStyles.pageFooter}>
          <Link text="Already have an account? Login" route="SignIn" />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
