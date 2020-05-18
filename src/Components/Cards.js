import React, { Component } from "react";
import { Text, initializeIcons } from "@fluentui/react";
import { Card } from "@uifabric/react-cards";
import "office-ui-fabric-react/dist/css/fabric.css";

const container = {
  display: "flex",
  justifyContent: "center",
  margin: "10vh 0",
};

const icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: "middle",
  paddingLeft: 0,
  color: "#0078d4",
};

const styles = {
  cardStyles: {
    root: {
      background: "white",
      padding: 20,
      borderTop: "5px solid #0078d4",
      width: "90%",
      maxWidth: "90%",
      margin: "auto",
    },
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: "bold",
    },
  },
  amount: {
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30,
    },
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#0078d4",
    },
  },
};

class Cards extends Component {
  state = { user: {} };

  render() {
    const { selectedUser } = this.props;
    initializeIcons();
    return (
      <div style={container}>
        <div className="s-Grid-col ms-sm6 ms-xl6">
          <Card styles={styles.cardStyles}>
            <Card.Section>
              <Card.Item>
                <i
                  style={icon}
                  className={
                    <code data-enlighter-language="raw" class="EnlighterJSRAW">
                      ms-Icon ms-Icon--'Money'
                    </code>
                  }
                  aria-hidden="true"
                ></i>
                <Text styles={styles.header}>Balance</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.amount}>{selectedUser.balance}</Text>
              </Card.Item>
            </Card.Section>
          </Card>
        </div>
        <div className="s-Grid-col ms-sm6 ms-xl6">
          <Card styles={styles.cardStyles}>
            <Card.Section>
              <Card.Item>
                <i
                  style={icon}
                  className={
                    <code data-enlighter-language="raw" class="EnlighterJSRAW">
                      ms-Icon ms-Icon--'Money'
                    </code>
                  }
                  aria-hidden="true"
                ></i>
                <Text styles={styles.header}>Savings</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.amount}>{selectedUser.savings}</Text>
              </Card.Item>
            </Card.Section>
          </Card>
        </div>
      </div>
    );
  }
}

export default Cards;
