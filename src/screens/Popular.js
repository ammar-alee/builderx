import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderSection from "../components/HeaderSection";
import { Link } from "react-router-dom";
import SimpleLineIconsIcon from "react-native-vector-icons/dist/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/dist/MaterialIcons";
import Divider from "../components/Divider";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import PostComponent from "../components/PostComponent";
import Footer from "../components/Footer";

function Popular() {
  return (
    <Container>
      <HeaderSectionColumn>
        <HeaderSection
          style={{
            height: 60
          }}
        />
        <HeaderTabs>
          <Link to="/Home">
            <Button>
              <ButtonOverlay>
                <HomeText>Home</HomeText>
              </ButtonOverlay>
            </Button>
          </Link>
          <PopularTab>
            <PopularText>Popular</PopularText>
          </PopularTab>
        </HeaderTabs>
        <LayoutOptionsStack>
          <LayoutOptions>
            <BestPostIconRow>
              <SimpleLineIconsIcon
                name="fire"
                style={{
                  color: "grey",
                  fontSize: 20
                }}
              />
              <BestPosts>HOT POSTS</BestPosts>
              <IoniconsIcon
                name="md-arrow-dropdown"
                style={{
                  color: "grey",
                  fontSize: 20,
                  marginLeft: 28
                }}
              />
            </BestPostIconRow>
            <BestPostIconRowFiller />
            <MaterialIconsIcon
              name="view-agenda"
              style={{
                color: "grey",
                fontSize: 20,
                marginRight: 20,
                marginTop: 14
              }}
            />
          </LayoutOptions>
          <Divider
            style={{
              top: 47,
              left: 0,
              height: 1,
              position: "absolute",
              right: 0
            }}
          />
        </LayoutOptionsStack>
        <TrendingIconRow>
          <MaterialCommunityIconsIcon
            name="trending-up"
            style={{
              color: "#036bbd",
              fontSize: 20
            }}
          />
          <TrendingToday>Trending today</TrendingToday>
        </TrendingIconRow>
        <TrendingSection>
          <Cover1>
            <Image>
              <Rect>
                <Text2>Gita</Text2>
              </Rect>
            </Image>
          </Cover1>
          <Cover2>
            <Image>
              <Rect>
                <Text2>Northern Lights</Text2>
              </Rect>
            </Image>
          </Cover2>
          <Rect2>
            <Image>
              <Rect>
                <Text2>Northern Lights</Text2>
              </Rect>
            </Image>
          </Rect2>
        </TrendingSection>
      </HeaderSectionColumn>
      <ScrollArea>
        <PostComponent
          style={{
            height: 120,
            alignSelf: "stretch"
          }}
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
      </ScrollArea>
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

const Button = styled.div`
  width: 124px;
  align-self: stretch;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const HomeText = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  align-self: center;
`;

const PopularTab = styled.div`
  width: 142px;
  align-self: stretch;
  border-color: #036bbd;
  border-width: 0px;
  border-bottom-width: 3px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border-style: solid;
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
  top: 0px;
  left: 0px;
  height: 47px;
  position: absolute;
  right: 0px;
  flex-direction: row;
  display: flex;
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
  margin-left: 15px;
  margin-top: 14px;
  display: flex;
`;

const BestPostIconRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
  height: 100%;
`;

const LayoutOptionsStack = styled.div`
  height: 48px;
  margin-top: 1px;
  position: relative;
`;

const TrendingToday = styled.span`
  font-family: IBM Plex Sans;
  color: #036bbd;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 1px;
  margin-left: 20px;
`;

const TrendingIconRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-top: 13px;
  margin-left: 13px;
  margin-right: 184px;
`;

const TrendingSection = styled.div`
  overflow-x: scroll;
  width: 360px;
  height: 143px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0,0,0,1);
  margin-top: 12px;
`;

const Cover1 = styled.div`
  width: 156px;
  height: 128px;
  margin-left: 16px;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const Image = styled.div`
  width: 156px;
  height: 128px;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  object-fit: cover;
  background-image: url(${require("../assets/images/lights.jpg")});
`;

const Rect = styled.div`
  opacity: 0.14;
  border-radius: 10px;
  background-image: linear-gradient(0deg, rgba(10,9,9,1) 0%, rgba(255,255,255,1) 100%);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
`;

const Text2 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 1px;
  margin-bottom: 5px;
  align-self: center;
`;

const Cover2 = styled.div`
  width: 156px;
  height: 128px;
  margin-left: 16px;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const Rect2 = styled.div`
  width: 156px;
  height: 128px;
  margin-left: 16px;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const HeaderSectionColumn = styled.div`
  flex-direction: column;
  margin-top: 22px;
  display: flex;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  flex-direction: column;
  align-items: "undefined";
  justify-content: "undefined";
  background-color: rgba(0,0,0,1);
  flex: 1 1 0%;
  margin-bottom: 11px;
  display: flex;
  height: 100%;
`;

export default Popular;
