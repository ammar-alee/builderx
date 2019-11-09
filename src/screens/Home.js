import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderSection from "../components/HeaderSection";
import { Link } from "react-router-dom";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/dist/MaterialIcons";
import Divider from "../components/Divider";
import PostComponent from "../components/PostComponent";
import Footer from "../components/Footer";

function Home() {
  return (
    <Container>
      <HeaderSectionColumn>
        <HeaderSection
          style={{
            height: 60
          }}
        />
        <HeaderTabs>
          <HomeTab>
            <HomeText>Home</HomeText>
          </HomeTab>
          <Link to="/Popular">
            <Button>
              <ButtonOverlay>
                <PopularText>Popular</PopularText>
              </ButtonOverlay>
            </Button>
          </Link>
        </HeaderTabs>
        <LayoutOptions>
          <BestPostIconRowRow>
            <BestPostIconRow>
              <MaterialCommunityIconsIcon
                name="rocket"
                style={{
                  color: "grey",
                  fontSize: 20
                }}
              />
              <BestPosts>BEST POSTS</BestPosts>
              <IoniconsIcon
                name="md-arrow-dropdown"
                style={{
                  color: "grey",
                  fontSize: 20,
                  marginLeft: 21
                }}
              />
            </BestPostIconRow>
            <BestPostIconRowFiller />
            <MaterialIconsIcon
              name="view-agenda"
              style={{
                color: "grey",
                fontSize: 20
              }}
            />
          </BestPostIconRowRow>
          <Divider
            style={{
              height: 1,
              marginTop: 13
            }}
          />
        </LayoutOptions>
      </HeaderSectionColumn>
      <PostSection>
        <PostComponent
          style={{
            height: 120,
            alignSelf: "stretch"
          }}
          Subreddit="r/Popular"
          PostDetails="Posted by u/hey • 10 hours ago"
          ContentText="What is an odd behaviour of yours you think only you do?"
          UpvotesText="873"
          CommentText="91"
        />
        <PostComponent
          style={{
            height: 120,
            alignSelf: "stretch"
          }}
          ContentText="Mayank Agarwal has scored his maiden double century - which is also his first century - in his 5th test match and the first match in India"
          Subreddit="r/Cricket"
          UpvotesText="873"
          CommentText="91"
          PostDetails="Posted by u/hey • 5 hours ago"
          text5=""
        />
        <PostComponent
          style={{
            height: 120,
            alignSelf: "stretch"
          }}
          ContentText="What is an odd behaviour of yours you think only you do?"
          Subreddit="r/AMA"
          UpvotesText="873"
          CommentText="91"
          PostDetails="Posted by u/hey • 10 hours ago"
        />
        <PostComponent
          style={{
            height: 120,
            alignSelf: "stretch"
          }}
          ContentText="Betty Marion white was born in 1922; the first BMW car was made in 1928. Betty White is the original BMW"
          Subreddit="r/ShowerThoughts"
          UpvotesText="34.3k"
          CommentText="280"
          PostDetails="Posted by u/dinger • 10 hours ago"
        />
        <PostComponent
          style={{
            height: 120,
            alignSelf: "stretch"
          }}
          ContentText="Betty Marion white was born in 1922; the first BMW car was made in 1928. Betty White is the original BMW"
          Subreddit="r/ShowerThoughts"
          UpvotesText="34.3k"
          CommentText="280"
          PostDetails="Posted by u/dinger • 10 hours ago"
        />
      </PostSection>
      <Footer
        style={{
          height: 50
        }}
      />
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
const HeaderTabs = styled.div`
  height: 48px;
  background-color: rgba(0,0,0,1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  display: flex;
`;

const HomeTab = styled.div`
  width: 124px;
  height: 48px;
  border-color: #026bbd;
  border-width: 0px;
  border-bottom-width: 3px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border-style: solid;
`;

const HomeText = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  align-self: center;
`;

const Button = styled.div`
  width: 142px;
  align-self: stretch;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const PopularText = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  align-self: center;
`;

const LayoutOptions = styled.div`
  height: 48px;
  flex-direction: column;
  display: flex;
  margin-top: 1px;
`;

const BestPosts = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 1px;
  margin-left: 5px;
  margin-top: 3px;
`;

const BestPostIconRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
`;

const BestPostIconRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
  height: 100%;
`;

const BestPostIconRowRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-top: 14px;
  margin-left: 15px;
  margin-right: 26px;
`;

const HeaderSectionColumn = styled.div`
  flex-direction: column;
  margin-top: 22px;
  display: flex;
`;

const PostSection = styled.div`
  overflow-y: scroll;
  flex-direction: column;
  align-items: "undefined";
  justify-content: flex-start;
  background-color: rgba(0,0,0,1);
  flex: 1 1 0%;
  display: flex;
  height: 100%;
`;

export default Home;
