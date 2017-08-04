import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import './Dropdown.Basic.Example.scss';

export class DropdownBasicExample extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      selectedItem: null
    };
  }

  public render() {
    let { selectedItem } = this.state;

    return (
      <div className='dropdownExample'>

        <Dropdown
          placeHolder='Select an Option'
          label='Basic uncontrolled example:'
          id='Basicdrop1'
          ariaLabel='Basic dropdown example'
          options={
            [
              { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
              { key: 'A', text: 'Option a' },
              { key: 'B', text: 'Option b' },
              { key: 'C', text: 'Option c' },
              { key: 'D', text: 'Option d' },
              { key: 'E', text: 'Option e' },
              { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
              { key: 'Header2', text: 'People', itemType: DropdownMenuItemType.Header },
              { key: 'F', text: 'Option f' },
              { key: 'G', text: 'Option g' },
              { key: 'H', text: 'Option h' },
              { key: 'I', text: 'Option i' },
              { key: 'J', text: 'Option j' },
              { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
              { key: 'A2', text: 'Option a' },
              { key: 'B2', text: 'Option b' },
              { key: 'C2', text: 'Option c' },
              { key: 'D2', text: 'Option d' },
              { key: 'E2', text: 'Option e' },
              { key: 'divider_22', text: '-', itemType: DropdownMenuItemType.Divider },
              { key: 'Header22', text: 'People', itemType: DropdownMenuItemType.Header },
              { key: 'F2', text: 'Option f' },
              { key: 'G2', text: 'Option g' },
              { key: 'H2', text: 'Option h' },
              { key: 'I2', text: 'Option i' },
              { key: 'J2', text: 'Option j' },
              { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
              { key: 'A3', text: 'Option a' },
              { key: 'B3', text: 'Option b' },
              { key: 'C3', text: 'Option c' },
              { key: 'D3', text: 'Option d' },
              { key: 'E3', text: 'Option e' },
              { key: 'divider_23', text: '-', itemType: DropdownMenuItemType.Divider },
              { key: 'Header23', text: 'People', itemType: DropdownMenuItemType.Header },
              { key: 'F3', text: 'Option f' },
              { key: 'G3', text: 'Option g' },
              { key: 'H3', text: 'Option h' },
              { key: 'I3', text: 'Option i' },
              { key: 'J3', text: 'Option j' },
              { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
              { key: 'A4', text: 'Option a' },
              { key: 'B4', text: 'Option b' },
              { key: 'C4', text: 'Option c' },
              { key: 'D4', text: 'Option d' },
              { key: 'E4', text: 'Option e' },
              { key: 'divider_24', text: '-', itemType: DropdownMenuItemType.Divider },
              { key: 'Header24', text: 'People', itemType: DropdownMenuItemType.Header },
              { key: 'F4', text: 'Option f' },
              { key: 'G4', text: 'Option g' },
              { key: 'H4', text: 'Option h' },
              { key: 'I4', text: 'Option i' },
              { key: 'J4', text: 'Option j' },
            ]
          }
        />

        <Dropdown
          label='Disabled uncontrolled example with defaultSelectedKey:'
          defaultSelectedKey='D'
          options={
            [
              { key: 'A', text: 'Option a' },
              { key: 'B', text: 'Option b' },
              { key: 'C', text: 'Option c' },
              { key: 'D', text: 'Option d' },
              { key: 'E', text: 'Option e' },
              { key: 'F', text: 'Option f' },
              { key: 'G', text: 'Option g' },
            ]
          }
          disabled={ true }
        />

        <Dropdown
          label='Controlled example:'
          selectedKey={ selectedItem && selectedItem.key }
          onChanged={ (item) => this.setState({ selectedItem: item }) }
          onBlur={ () => console.log('onBlur called') }
          placeHolder='Select an Option'
          options={
            [
              { key: 'A', text: 'Option a' },
              { key: 'B', text: 'Option b' },
              { key: 'C', text: 'Option c' },
              { key: 'D', text: 'Option d' },
              { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
              { key: 'E', text: 'Option e' },
              { key: 'F', text: 'Option f' },
              { key: 'G', text: 'Option g' },
            ]
          }
        />

        <Dropdown
          placeHolder='Select options'
          label='Multi-Select uncontrolled example:'
          defaultSelectedKeys={ ['Apple', 'Banana'] }
          onChanged={ (item) => this.changeState(item) }
          onBlur={ () => console.log('onBlur called') }
          multiSelect
          options={
            [
              { key: 'Header2', text: 'Fruits', itemType: DropdownMenuItemType.Header },
              { key: 'Apple', text: 'apple' },
              { key: 'Banana', text: 'banana' },
              { key: 'Orange', text: 'orange' },
              { key: 'Grape', text: 'grape' },
              { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
              { key: 'Header3', text: 'Lanuages', itemType: DropdownMenuItemType.Header },
              { key: 'English', text: 'english' },
              { key: 'French', text: 'french' },
              { key: 'Germany', text: 'germany' },
            ]
          }
        />

        <Dropdown
          placeHolder='Select options'
          label='Multi-Select controlled example:'
          selectedKeys={ selectedItem && selectedItem.key }
          onChanged={ (item) => this.onChangeMultiSelect(item) }
          onBlur={ () => console.log('onBlur called') }
          multiSelect
          options={
            [
              { key: 'Header4', text: 'Colors', itemType: DropdownMenuItemType.Header },
              { key: 'red', text: 'Red' },
              { key: 'green', text: 'Green' },
              { key: 'blue', text: 'Blue' },
              { key: 'yellow', text: 'Yellow' },
              { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
              { key: 'Header5', text: 'Flower', itemType: DropdownMenuItemType.Header },
              { key: 'rose', text: 'Rose' },
              { key: 'lily', text: 'Lily' },
              { key: 'sunflower', text: 'Sunflower' },
            ]
          }
        />
        <Dropdown
          label='Disabled uncontrolled example with defaultSelectedKey:'
          defaultSelectedKeys={ ['GG', 'FF'] }
          multiSelect
          options={
            [
              { key: 'AA', text: 'Option a' },
              { key: 'BB', text: 'Option b' },
              { key: 'CC', text: 'Option c' },
              { key: 'DD', text: 'Option d' },
              { key: 'EE', text: 'Option e' },
              { key: 'FF', text: 'Option f' },
              { key: 'GG', text: 'Option g' },
            ]
          }
          disabled={ true }
        />
      </div>

    );
  }

  public makeList(items: any) {
    let list = [];
    for (let i = 0; i < items; i++) {
      list.push({ key: i, text: 'Option ' + i });
    }

    return list;
  }

  public changeState(item: IDropdownOption) {
    console.log('here is the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
    this.setState({ selectedItem: item });
  }

  public onChangeMultiSelect(item: IDropdownOption) {
    let updatedSelectedItem = this.state.selectedItem ? this.copyArray(this.state.selectedItem) : [];
    if (item.selected) {
      // add the option if it's checked
      updatedSelectedItem.push(item);
    } else {
      // remove the option if it's unchecked
      let currIndex = updatedSelectedItem.indexOf(item.index);
      if (currIndex > -1) {
        updatedSelectedItem.splice(currIndex, 1);
      }
    }
    this.setState({
      selectedItem: updatedSelectedItem
    });
  }

  public copyArray(array: any[]): any[] {
    let newArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  }

}
