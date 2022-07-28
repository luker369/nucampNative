import { Card } from 'react-native-elements';
import { ScrollView, Text } from 'react-native';
import { PARTNERS } from "../shared/partners";
import { useState } from 'react';


const Mission = () => {
  return (
    <Card>
      <Card.Title>
        Our Mission
      </Card.Title>
      <Card.Divider />
      <Text style={{margin: 10}}></Text>
    </Card>
  )
};

const AboutScreen = () => {
  const [partners, setPartners] = useState(PARTNERS);
  return (
    <ScrollView>
      <Mission />
      <Card>
        <Card.Title>Community Partners</Card.Title>
        <Card.Divider />
        {partners.map((partner) => {
          return (
            <ListItem key={partner.id}>
              <Avatar rounded source={partner.image} />
              <ListItem.Content>
                <ListItem.Title>{partner.name}</ListItem.Title>
                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            )
        })}

        {partners.map((partner) => {
          return (
            <ListItem key={partner.id}>
              <Avatar rounded source={partner.image} />
              <ListItem.Content>
                <ListItem.Title>{partner.name}</ListItem.Title>
                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            )
        })}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen