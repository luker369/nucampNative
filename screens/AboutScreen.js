import { Avatar, Card, ListItem } from "react-native-elements";
import { ScrollView, Text } from 'react-native';
import { PARTNERS } from "../shared/partners";

const AboutScreen = () => {

const [partners, setPartners] = useState(PARTNERS);

const Mission = () => {
  <Card>
    <Card.Title>Our Mission</Card.Title>
    <Card.Divider />
    <Text style={{margin: 10}}>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
    </Text>
  </Card>
};

  return (
    <ScrollView>
      <Mission />
      <Card>
        <Card.title>Community Partners</Card.title>
        <Card.Divider />
        {PARTNERS.map((partner) => {
          <>
          <ListItem key={partner.id} />
            <Avatar rounded source={partner.image} />
            <ListItem.Content>
              <ListItem.Title>{partner.name}</ListItem.Title>
              <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
            </ListItem.Content>
          </>
        })
        };
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;

