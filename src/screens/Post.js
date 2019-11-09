import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Divider from "../components/Divider";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/dist/SimpleLineIcons";

function Post() {
  return (
    <Container>
      <HeaderSection>
        <Button3Row>
          <Button3>
            <ButtonOverlay onClick={() => props.history.goBack()}>
              <MaterialCommunityIconsIcon
                name="close"
                style={{
                  color: "rgba(255,255,255,1)",
                  fontSize: 24,
                  alignSelf: "center"
                }}
              />
            </ButtonOverlay>
          </Button3>
          <MaterialCommunityIconsIcon
            name="bookmark"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 24,
              marginLeft: 228,
              marginTop: 2
            }}
          />
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 24,
              marginLeft: 20,
              marginTop: 2
            }}
          />
        </Button3Row>
        <Button3RowFiller />
        <Divider
          style={{
            height: 1
          }}
        />
      </HeaderSection>
      <PostDetails>
        <ImageRow>
          <Image src={require("../assets/images/bat.jpg")} />
          <TextColumn>
            <Text>r/Jokes</Text>
            <Text2>Posted by u/explosivelyddehi • 10h</Text2>
          </TextColumn>
        </ImageRow>
      </PostDetails>
      <Text3>
        They all laughed when I told them that one day I would discover the
        secrets of invisibility
      </Text3>
      <Text4>If only they could see me now</Text4>
      <ActionBar>
        <PostVote>
          <EntypoIcon
            name="arrow-up"
            style={{
              color: "#828384",
              fontSize: 12,
              alignSelf: "center"
            }}
          />
          <Text5>16.5k</Text5>
          <EntypoIcon
            name="arrow-down"
            style={{
              color: "#828384",
              fontSize: 12,
              alignSelf: "center"
            }}
          />
        </PostVote>
        <Button>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="comment"
              style={{
                color: "#828384",
                fontSize: 12,
                alignSelf: "center"
              }}
            />
            <Text6>346</Text6>
          </ButtonOverlay>
        </Button>
        <Button2>
          <ButtonOverlay>
            <FontAwesomeIcon
              name="share"
              style={{
                color: "#828384",
                fontSize: 12,
                alignSelf: "center"
              }}
            />
            <Text7>Share</Text7>
          </ButtonOverlay>
        </Button2>
      </ActionBar>
      <CommentSelection>
        <Icon9Row>
          <MaterialCommunityIconsIcon
            name="rocket"
            style={{
              color: "grey",
              fontSize: 20
            }}
          />
          <Icon8Stack>
            <IoniconsIcon
              name="md-arrow-dropdown"
              style={{
                left: 118,
                position: "absolute",
                color: "grey",
                fontSize: 20,
                top: 0
              }}
            />
            <Text8>BEST COMMENTS</Text8>
          </Icon8Stack>
        </Icon9Row>
      </CommentSelection>
      <CommentsWrapperStack>
        <CommentsWrapper>
          <Comment1>
            <Text9>Mindbender • 9h</Text9>
            <Text10>
              You didn&#39;t have me in the first half, not gonna lie.
            </Text10>
            <Group>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={{
                  color: "rgba(128,128,128,1)",
                  fontSize: 14,
                  alignSelf: "center",
                  height: 16
                }}
              />
              <ReplyAction>
                <Icon12Row>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={{
                      color: "grey",
                      fontSize: 12
                    }}
                  />
                  <Text16>Reply</Text16>
                </Icon12Row>
              </ReplyAction>
              <CommentVote>
                <EntypoIcon
                  name="arrow-up"
                  style={{
                    color: "#828384",
                    fontSize: 12,
                    alignSelf: "center"
                  }}
                />
                <Text15>16</Text15>
                <EntypoIcon
                  name="arrow-down"
                  style={{
                    color: "#828384",
                    fontSize: 12,
                    alignSelf: "center"
                  }}
                />
              </CommentVote>
            </Group>
          </Comment1>
          <Comment11>
            <Text11>I can&#39;t see either half</Text11>
            <Text12>Mindbender • 9h</Text12>
            <Rect3>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={{
                  color: "rgba(128,128,128,1)",
                  fontSize: 14,
                  alignSelf: "center",
                  height: 16
                }}
              />
              <Rect4>
                <Icon14Row>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={{
                      color: "grey",
                      fontSize: 12
                    }}
                  />
                  <Text17>Reply</Text17>
                </Icon14Row>
              </Rect4>
              <Rect5>
                <EntypoIcon
                  name="arrow-up"
                  style={{
                    color: "#828384",
                    fontSize: 12
                  }}
                />
                <Text18>16</Text18>
                <EntypoIcon
                  name="arrow-down"
                  style={{
                    color: "#828384",
                    fontSize: 12
                  }}
                />
              </Rect5>
            </Rect3>
          </Comment11>
          <Comment111>
            <Text13>Mindbender • 9h</Text13>
            <Text14>I can&#39;t see either half</Text14>
            <Rect6>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={{
                  color: "rgba(128,128,128,1)",
                  fontSize: 14,
                  alignSelf: "center",
                  height: 16
                }}
              />
              <Rect7>
                <Icon18Row>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={{
                      color: "grey",
                      fontSize: 12
                    }}
                  />
                  <Text19>Reply</Text19>
                </Icon18Row>
              </Rect7>
              <Rect8>
                <EntypoIcon
                  name="arrow-up"
                  style={{
                    color: "#828384",
                    fontSize: 12
                  }}
                />
                <Text20>16</Text20>
                <EntypoIcon
                  name="arrow-down"
                  style={{
                    color: "#828384",
                    fontSize: 12
                  }}
                />
              </Rect8>
            </Rect6>
          </Comment111>
        </CommentsWrapper>
        <AddCommentSection>
          <Group2>
            <TextInput placeholder="Add a comment" />
          </Group2>
          <Group2Filler />
          <Group3>
            <Group4>
              <Icon21Stack>
                <SimpleLineIconsIcon
                  name="arrow-down"
                  style={{
                    top: 0,
                    left: 0,
                    position: "absolute",
                    color: "rgba(255,255,255,1)",
                    fontSize: 20
                  }}
                />
                <SimpleLineIconsIcon
                  name="arrow-down"
                  style={{
                    left: 0,
                    position: "absolute",
                    color: "rgba(255,255,255,1)",
                    fontSize: 20,
                    top: 8
                  }}
                />
              </Icon21Stack>
            </Group4>
          </Group3>
        </AddCommentSection>
      </CommentsWrapperStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const HeaderSection = styled.div`
  height: 60px;
  flex-direction: column;
  display: flex;
  margin-top: 22px;
`;

const Button3 = styled.div`
  width: 30px;
  height: 30px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const Button3Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 13px;
  margin-left: 17px;
  margin-right: 17px;
`;

const Button3RowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
  height: 100%;
`;

const PostDetails = styled.div`
  height: 48px;
  flex-direction: column;
  display: flex;
  margin-top: 20px;
  margin-left: 19px;
  margin-right: 42px;
`;

const Image = styled.img`
  width: 35px;
  height: 36px;
  border-radius: 10px;
  margin-top: 6px;
  object-fit: contain;
`;

const Text = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
`;

const Text2 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-top: 11px;
`;

const TextColumn = styled.div`
  width: 198px;
  flex-direction: column;
  display: flex;
  margin-left: 12px;
`;

const ImageRow = styled.div`
  height: 45px;
  flex-direction: row;
  display: flex;
  margin-right: 54px;
`;

const Text3 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 18px;
  font-weight: regular;
  font-style: normal;
  margin-top: 28px;
  margin-left: 19px;
  margin-right: 19px;
`;

const Text4 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  margin-top: 12px;
  margin-left: 19px;
`;

const ActionBar = styled.div`
  height: 18px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 31px;
  margin-left: 19px;
  margin-right: 19px;
  display: flex;
`;

const PostVote = styled.div`
  width: 71px;
  height: 17px;
  flex-direction: row;
  justify-content: space-around;
  display: flex;
`;

const Text5 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  align-self: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Button = styled.div`
  width: 43px;
  height: 14px;
  flex-direction: row;
  justify-content: space-between;
  border: none;
`;

const Text6 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  align-self: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Button2 = styled.div`
  width: 57px;
  height: 15px;
  flex-direction: row;
  justify-content: space-between;
  border: none;
`;

const Text7 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  align-self: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const CommentSelection = styled.div`
  width: 154px;
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-top: 31px;
  margin-left: 17px;
`;

const Text8 = styled.span`
  font-family: IBM Plex Sans;
  top: 4px;
  left: 0px;
  color: rgba(128,128,128,1);
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 1px;
`;

const Icon8Stack = styled.div`
  width: 128px;
  height: 20px;
  margin-left: 6px;
  position: relative;
`;

const Icon9Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const CommentsWrapper = styled.div`
  top: 0px;
  left: 0px;
  height: 322px;
  position: absolute;
  flex-direction: column;
  right: 0px;
  justify-content: space-around;
  display: flex;
`;

const Comment1 = styled.div`
  width: 304px;
  height: 64px;
  flex-direction: column;
  display: flex;
`;

const Text9 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
`;

const Text10 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-top: 10px;
`;

const Group = styled.div`
  width: 228px;
  height: 18px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 14px;
  margin-left: 75px;
  display: flex;
`;

const ReplyAction = styled.div`
  width: 55px;
  height: 16px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

const Text16 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
  margin-left: 12px;
`;

const Icon12Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 2px;
  margin-top: 2px;
`;

const CommentVote = styled.div`
  width: 62px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  display: flex;
`;

const Text15 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  align-self: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Comment11 = styled.div`
  width: 284px;
  height: 67px;
  margin-left: 30px;
  flex-direction: column;
  display: flex;
`;

const Text11 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-top: 26px;
`;

const Text12 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
  margin-top: -40px;
`;

const Rect3 = styled.div`
  width: 228px;
  height: 19px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 41px;
  margin-left: 56px;
  display: flex;
`;

const Rect4 = styled.div`
  width: 55px;
  height: 16px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

const Text17 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
  margin-left: 12px;
`;

const Icon14Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 2px;
  margin-top: 2px;
`;

const Rect5 = styled.div`
  width: 62px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  display: flex;
`;

const Text18 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Comment111 = styled.div`
  width: 255px;
  height: 66px;
  margin-left: 60px;
  flex-direction: column;
  display: flex;
`;

const Text13 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
`;

const Text14 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-top: 12px;
`;

const Rect6 = styled.div`
  width: 228px;
  height: 18px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 14px;
  margin-left: 26px;
  display: flex;
`;

const Rect7 = styled.div`
  width: 55px;
  height: 16px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

const Text19 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
  margin-left: 12px;
`;

const Icon18Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 2px;
  margin-top: 2px;
`;

const Rect8 = styled.div`
  width: 62px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  display: flex;
`;

const Text20 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const AddCommentSection = styled.div`
  left: 1px;
  height: 40px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  flex-direction: row;
  display: flex;
`;

const Group2 = styled.div`
  width: 275px;
  background-color: #1a1a1c;
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const TextInput = styled.input`
  font-family: IBM Plex Sans;
  width: 265px;
  height: 32px;
  background-color: #1a1a1c;
  color: rgba(255,255,255,1);
  border-radius: 6px;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-left: 10px;
  border: none;
  background: transparent;
`;

const Group2Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
  height: 100%;
`;

const Group3 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #1a1a1c;
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Group4 = styled.div`
  width: 20px;
  height: 28px;
  flex-direction: column;
  display: flex;
  align-self: center;
`;

const Icon21Stack = styled.div`
  width: 20px;
  height: 28px;
  position: relative;
`;

const CommentsWrapperStack = styled.div`
  height: 337px;
  margin-top: 26px;
  margin-left: 19px;
  margin-right: 13px;
  position: relative;
`;

export default Post;
