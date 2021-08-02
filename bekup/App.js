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
import LoginPage from './src/LoginPage';
import RegisterPage from './src/RegisterPage';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

let render = 0;

const App = () => {
  return <FormAwal />;
};

const ReactFormAwal = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    <Text>{JSON.stringify(data)}</Text>;
    console.log(JSON.stringify(data));
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View>
            <TextInput
              style={stylesa.TextInput}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Identity No"
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
          <TextInput
            style={stylesa.TextInput}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Identity Type"
            value={value}
          />
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
          <TextInput
            style={stylesa.TextInput}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Name"
            value={value}
          />
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
          <TextInput
            style={stylesa.TextInput}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Age"
            value={value}
          />
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
          <TextInput
            style={stylesa.TextInput}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Date Of Birth"
            value={value}
          />
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
          <TextInput
            style={stylesa.TextInput}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Married Status"
            value={value}
          />
        )}
        name="marriedStatus"
        defaultValue=""
      />

      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 80,
          alignSelf: 'center',
        }}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
      <Text></Text>
    </View>
  );
};

const Baru = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="number"
        placeholder="Identity No"
        {...register('Identity No', {required: true, maxLength: 80})}
      />
      <select {...register('Identity Type', {required: true})}>
        <option value="KTP">KTP</option>
        <option value="Passport">Passport</option>
      </select>
      <TextInput
        type="text"
        placeholder="Name"
        {...register('Name', {required: true})}
      />
      <input
        type="number"
        placeholder="Age"
        {...register('Age', {required: true})}
      />
      <TextInput
        type="datetime"
        placeholder="Date Of Birth"
        {...register('Date Of Birth', {required: true})}
      />

      <TextInput
        {...register('Married Status', {required: true})}
        type="radio"
        value="Yes"
      />
      <TextInput
        {...register('Married Status', {required: true})}
        type="radio"
        value="No"
      />

      <Button type="submit" />
    </form>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    padding: 8,
  },
  headerText: {
    padding: 20,
    color: 'black',
    borderRadius: 8,
  },
  activeHeaderText: {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
  },
});

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(themes.light);

function Toolbar(props) {
  return (
    <View>
      <ThemedButton />
    </View>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <Button style={{background: theme.background, color: theme.foreground}}>
      <Text>I am styled by theme context!</Text>
    </Button>
  );
}

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

const Konten = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.Text}>Indetity No</Text>
        <TextInput style={styles.TextInput} placeholder="ex : 317203123" />
        <Text style={styles.Text}>Identity Type</Text>
        <TextInput style={styles.TextInput} placeholder="ex: KTP/ Passport" />
        <Text style={styles.Text}>Name</Text>
        <TextInput style={styles.TextInput} placeholder="ex : John" />
      </ScrollView>
    </View>
  );
};

const Travel = () => {
  return (
    <View style={{backgroundColor: '#FEF7DC', flex: 1}}>
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          marginTop: 36,
          marginLeft: 38,
          marginBottom: 40,
        }}>
        gatau gajelas
      </Text>
      <TextInput style={stylesa.Search} placeholder="   Find Destination" />
      <ScrollView>
        <View>
          <Image source={require('./satu.jpg')} style={stylesa.Gambar}></Image>
          <View style={stylesa.Tulisan}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              DUBAI
            </Text>
          </View>
        </View>
        <View>
          <Image source={require('./dua.jpg')} style={stylesa.Gambar}></Image>
          <View style={stylesa.Tulisan}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              LONDON
            </Text>
          </View>
        </View>
        <View>
          <Image source={require('./paris.jpg')} style={stylesa.Gambar}></Image>
          <View style={stylesa.Tulisan}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              PARIS
            </Text>
          </View>
        </View>
        <View>
          <Image source={require('./empat.jpg')} style={stylesa.Gambar}></Image>
          <View style={stylesa.Tulisan}>
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              MESIR
            </Text>
          </View>
        </View>
        <View>
          <Image source={require('./lima.jpg')} style={stylesa.Gambar}></Image>
          <View style={stylesa.Tulisan}>
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              JAKARTA
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
