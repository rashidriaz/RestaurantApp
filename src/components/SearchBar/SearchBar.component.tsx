import {View, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData} from "react-native";
import {SearchBarStyles} from "./SearchBar.styles";
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
export type SearchBarProps = {
  placeholder: string,
  defaultValue: string,
  onChange: (text:string)=>void,
  onSubmit?: (text:NativeSyntheticEvent<TextInputSubmitEditingEventData>)=>void,
}
export const SearchBar = ({placeholder, defaultValue, onChange, onSubmit}:SearchBarProps)=>{
  const {SearchField, SearchIcon, Container} = SearchBarStyles;
  return (
    <View style={Container}>
      <TextInput
        style={SearchField}
        placeholder={placeholder}
        onChangeText={onChange}
        onSubmitEditing = {onSubmit}
        defaultValue={defaultValue}
      />
      <Icon name="search" style={SearchIcon}/>
    </View>
  )
}
