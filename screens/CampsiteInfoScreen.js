import { useState } from 'react';
import { Button, Modal, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import RenderCampsite from '../features/campsites/RenderCampsite';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);
    const [showModal, setShowModal] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [rating, setRating] = useState(5);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');



    const handleSubmit = () => {
      const newComment = {
        author,
        rating,
        text,
        campsiteId: campsite.id
      }
      console.log({newComment})
      setShowModal(!showModal)
    }
    const resetForm = () => {
      setRating(5)
      setAuthor('')
      setTitle('')
      
    }
    const renderCommentItem = ({ item }) => {
      return (
        <View style={styles.commentItem}>
          <Rating
            style={{ 
              fontSize: 14,
              alignItems: 'flex-start',
              paddingVertical: '5%'
              }} 
            startingValue={rating}
            imageSize={10}
            readonly={true}
            >
            {item.text}           
          </Rating>
          <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
          <Text style={{ fontSize: 12 }}>
            {`-- ${item.author}, ${item.date}`}
          </Text>
        </View>
      );
    };

    return (
      <>
        <FlatList
            data={comments.commentsArray.filter(
                (comment) => comment.campsiteId === campsite.id
            )}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
                marginHorizontal: 20,
                paddingVertical: 20
            }}
            ListHeaderComponent={
                <>
                    <RenderCampsite
                        campsite={campsite}
                        isFavorite={favorite}
                        markFavorite={() => setFavorite(true)}
                        onShowModal={() => setShowModal(!showModal)}
                    />
                    
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>
            }
        />
        <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
            

              <View>
                <Rating 
                  showRating={true}
                  startingValue={setRating}
                  imageSize={40}
                  onFinishRating={(rating)=> setRating(rating)}
                  style={{paddingVertical: 10}}
                  >
                  <Input>
                    <Text 
                      placeholder={'Author'}
                      leftIcon={user-o}
                      leftIconContainerStyle={{paddingRight: 10}}
                      onChangeText={rating}
                      value={value}>

                    </Text>
                  </Input>
                  <Input>
                  <Text 
                      placeholder={'Comment'}
                      leftIcon={comment-o}
                      leftIconContainerStyle={{paddingRight: 10}}
                      onChangeText={rating}
                      value={value}>
                    </Text>
                  </Input>
                  <Button></Button>
                </Rating>
                <View style={{margin: 10}}>
                  <Button 
                    onPress={setShowModal(!showModal)}
                    color={'#808080'}
                    title='Submit'
                  >

                  </Button>
                </View>
                <View style={{margin: 10}}>
                  <Button
                    title='Submit'
                    color={'#5637DD'}
                    onPress={() => {
                      setShowModal(!showModal);
                      resetForm();
                  }}
                  >

                  </Button>
                </View>
                <View style={{margin: 10}}>
                  <Button 
                    onPress={() => {
                      setShowModal(!showModal); 
                      resetForm()}}
                    color={'#808080'}
                    title='Cancel'
                  >
                  </Button>
                </View>
              </View>
            </Modal>
      </> 
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    modal: {
      justifyContent: 'center',
      margin: 20
    }

});

export default CampsiteInfoScreen;