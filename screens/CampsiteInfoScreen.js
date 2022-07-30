import { useState } from 'react';
import { Button, Modal, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);
    const [showModal, setShowModal] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
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
                <View style={{margin: 10}}>
                  <Button 
                    onPress={setShowModal(!showModal)}
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