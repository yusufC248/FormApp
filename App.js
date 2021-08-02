import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  ToastAndroid,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useForm, useController, Controller} from 'react-hook-form';

const App = () => {
  return <ReactFormAwal />;
};

const ReactFormAwal = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    Alert.alert(JSON.stringify(data));
    console.log(JSON.stringify(data));
    ToastAndroid.showWithGravityAndOffset(
      JSON.stringify(data),
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View>
      <ScrollView>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <Text style={stylesa.Text}>Indetity No</Text>
              <TextInput
                style={stylesa.TextInput}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="ex: 31720324"
                value={value}
              />
            </View>
          )}
          name="identityNo"
          defaultValue=""
        />
        {errors.identityNo && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <Text style={stylesa.Text}>Identity Type</Text>
              <TextInput
                style={stylesa.TextInput}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="ex: KTP/Passport"
                value={value}
              />
            </View>
          )}
          name="identityType"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <Text style={stylesa.Text}>Name</Text>
              <TextInput
                style={stylesa.TextInput}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="ex: John"
                value={value}
              />
            </View>
          )}
          name="Name"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <Text style={stylesa.Text}>Age</Text>
              <TextInput
                style={stylesa.TextInput}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="ex: 21"
                value={value}
              />
            </View>
          )}
          name="Age"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <Text style={stylesa.Text}>Date Of Birth</Text>
              <TextInput
                style={stylesa.TextInput}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="ex: 24/6/2000"
                value={value}
              />
            </View>
          )}
          name="dateOfBirth"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <Text style={stylesa.Text}>Married Status</Text>
              <TextInput
                style={stylesa.TextInput}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="ex: yes/no"
                value={value}
              />
            </View>
          )}
          name="marriedStatus"
          defaultValue=""
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: 150,
            height: 40,
            alignSelf: 'center',
            borderRadius: 20,
          }}
          title="Submit"
          onPress={handleSubmit(onSubmit)}>
          <Text style={{color: 'white', alignSelf: 'center', fontsize: 50}}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const stylesa = StyleSheet.create({
  TextInput: {
    borderWidth: 2,
    marginStart: 5,
    marginEnd: 5,
    marginTop: 15,
    borderRadius: 15,
    fontSize: 20,
    margin: 20,
    marginStart: 15,
  },
  Text: {
    fontSize: 28,
    marginTop: 15,
    color: 'black',
    marginStart: 15,
  },
  Gambar: {
    width: 400,
    height: 220,
    borderRadius: 18,
    alignSelf: 'center',
    marginBottom: 20,
  },
  Tulisan: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'white',
  },
  Search: {
    alignSelf: 'center',
    width: 400,
    height: 60,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: 'black',
    marginBottom: 30,
    borderRadius: 25,
    fontSize: 18,
    fontStyle: 'normal',
  },
});

export default App;
