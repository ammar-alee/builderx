import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function PostComponent(props) {
  return (
    <Container {...props}>
      <PostWrapper>
        <PostHeader>
          <Image src={require("../assets/images/lights.jpg")} />
          <HeaderGroup>
            <Subreddit>{props.Subreddit || "r/Jokes"}</Subreddit>
            <PostDetails>
              {props.text5 || "Posted by u/ChromeNewfie • 14h"}
            </PostDetails>
          </HeaderGroup>
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={{
              color: "grey",
              fontSize: 18
            }}
          />
        </PostHeader>
        <ContentText>
          {props.ContentText ||
            "What noise does a subatomic duck make?\n\nQuark"}
        </ContentText>
        <ActionBar>
          <VoteWrapper>
            <EntypoIcon
              name="arrow-up"
              style={{
                color: "#828384",
                fontSize: 10
              }}
            />
            <UpvotesText>16.5k</UpvotesText>
            <EntypoIcon
              name="arrow-down"
              style={{
                color: "#828384",
                fontSize: 10
              }}
            />
          </VoteWrapper>
          <CommentWrapper>
            <ButtonOverlay>
              <MaterialCommunityIconsIcon
                name="comment"
                style={{
                  color: "#828384",
                  fontSize: 10
                }}
              />
              <CommentText>346</CommentText>
            </ButtonOverlay>
          </CommentWrapper>
          <ShareWrapper>
            <ButtonOverlay>
              <FontAwesomeIcon
                name="share"
                style={{
                  color: "#828384",
                  fontSize: 10
                }}
              />
              <ShareText>Share</ShareText>
            </ButtonOverlay>
          </ShareWrapper>
        </ActionBar>
      </PostWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(0,0,0,1);
  align-items: center;
  justify-content: space-around;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const PostWrapper = styled.div`
  height: 108px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-around;
  display: flex;
`;

const PostHeader = styled.div`
  height: 30px;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  object-fit: cover;
`;

const HeaderGroup = styled.div`
  width: 248px;
  height: 27px;
  flex-direction: column;
  display: flex;
`;

const Subreddit = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1px;
`;

const PostDetails = styled.span`
  font-family: IBM Plex Sans;
  color: #808080;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1px;
  margin-top: 1px;
`;

const ContentText = styled.span`
  font-family: IBM Plex Sans;
  height: 36px;
  color: rgba(255,255,255,1);
  align-self: stretch;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1px;
`;

const ActionBar = styled.div`
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
`;

const VoteWrapper = styled.div`
  width: 62px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  margin-right: 0px;
  margin-left: 0px;
  display: flex;
`;

const UpvotesText = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const CommentWrapper = styled.div`
  width: 38px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-right: 0px;
  margin-left: 0px;
  border: none;
`;

const CommentText = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const ShareWrapper = styled.div`
  width: 49px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-right: 0px;
  margin-left: 0px;
  border: none;
`;

const ShareText = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
`;

export default PostComponent;
