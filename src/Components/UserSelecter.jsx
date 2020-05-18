import React, { Component } from "react";
import {
  Dropdown,
  IDropdown,
  IDropdownStyles,
  IDropdownOption,
} from "office-ui-fabric-react/lib/Dropdown";
import "office-ui-fabric-react/dist/css/fabric.css";

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

class UserSelecter extends Component {
  state = { user: {} };

  componentDidMount() {
    this.setState({ user: this.props.users[0] });
  }

  render() {
    const { users } = this.props;
    const options: IDropdownOption[] = users.map((user) => {
      return {
        key: user.id,
        text: user.first_name + " " + user.last_name,
      };
    });

    return (
      <div>
        <Dropdown
          placeholder={users[0].first_name + " " + users[0].last_name}
          label="Select Client"
          options={options}
          styles={dropdownStyles}
          onChange={(e, selectedOption) => {
            this.props.setUser(selectedOption.key);
          }}
        />
      </div>
    );
  }
}

export default UserSelecter;
