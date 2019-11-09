import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import Divider from "../components/Divider";
import NotificationComponent from "../components/NotificationComponent";
import Footer from "../components/Footer";

function Notifications() {
  return (
    <Container>
      <HeaderColumn>
        <Header>
          <ImageRow>
            <Image src={require("../assets/images/bat.jpg")} />
            <Text4>Inbox</Text4>
          </ImageRow>
          <ImageRowFiller />
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 24,
              marginRight: 21,
              marginTop: 18
            }}
          />
        </Header>
        <TabSection>
          <NotifsTab>
            <Text>Notifications</Text>
          </NotifsTab>
          <MessagesTab>
            <Text2>Messages</Text2>
          </MessagesTab>
          <ModMailTab>
            <Text3>Mod mail</Text3>
          </ModMailTab>
        </TabSection>
        <AllActivity>
          <Icon2Row>
            <MaterialCommunityIconsIcon
              name="flash"
              style={{
                color: "rgba(128,128,128,1)",
                fontSize: 20
              }}
            />
            <Text5>ALL ACTIVITY</Text5>
            <IoniconsIcon
              name="md-arrow-dropdown"
              style={{
                color: "grey",
                fontSize: 20,
                marginLeft: 36
              }}
            />
          </Icon2Row>
        </AllActivity>
      </HeaderColumn>
      <DividerStack>
        <Divider
          style={{
            top: 15,
            left: 0,
            height: 1,
            position: "absolute",
            right: 0
          }}
        />
        <ScrollArea>
          <TrendingNotif>
            <MaterialCommunityIconsIcon
              name="trending-up"
              style={{
                color: "rgba(2,107,189,1)",
                fontSize: 20,
                width: 20,
                marginTop: 20,
                alignSelf: "flex-start"
              }}
            />
            <Content>
              <Text6>Trending on r/FlutterDev</Text6>
              <Text7>Flutter web image picker</Text7>
              <Text8>Trending • 1h</Text8>
            </Content>
          </TrendingNotif>
          <Divider
            style={{
              height: 1,
              alignSelf: "stretch"
            }}
          />
          <NotificationComponent
            style={{
              height: 110,
              alignSelf: "stretch"
            }}
          />
          <Divider
            style={{
              height: 1,
              alignSelf: "stretch"
            }}
          />
          <NotificationComponent
            style={{
              height: 110,
              alignSelf: "stretch"
            }}
            Time="Comment reply • 2mo"
            NotificationHeading="u/bcd replied to your comment in r/bangalore"
            notificationContent="Right. "
          />
          <Divider
            style={{
              height: 1,
              alignSelf: "stretch"
            }}
          />
          <NotificationComponent
            style={{
              height: 110,
              alignSelf: "stretch"
            }}
            NotificationHeading="u/moderator replied to you comment in r/AMA"
            notificationContent="Please read this message"
          />
          <Divider
            style={{
              height: 1,
              alignSelf: "stretch"
            }}
          />
          <NotificationComponent
            style={{
              height: 110,
              alignSelf: "stretch"
            }}
            NotificationHeading="u/moderator replied to you comment in r/AMA"
            notificationContent="Please read this message"
          />
          <Divider
            style={{
              height: 1,
              alignSelf: "stretch"
            }}
          />
          <NotificationComponent
            style={{
              height: 120,
              alignSelf: "stretch"
            }}
            NotificationHeading="u/moderator replied to you comment in r/AMA"
            notificationContent="Please read this message"
          />
          <Divider
            style={{
              height: 1,
              alignSelf: "stretch"
            }}
          />
        </ScrollArea>
        <Footer
          style={{
            left: 0,
            height: 50,
            position: "absolute",
            right: 0,
            bottom: 0
          }}
        />
      </DividerStack>
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

const Header = styled.div`
  height: 60px;
  flex-direction: row;
  display: flex;
`;

const Image = styled.img`
  width: 35px;
  height: 36px;
  border-radius: 10px;
  object-fit: contain;
`;

const Text4 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  margin-left: 19px;
  margin-top: 8px;
`;

const ImageRow = styled.div`
  height: 36px;
  flex-direction: row;
  margin-left: 18px;
  margin-top: 12px;
  display: flex;
`;

const ImageRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
  height: 100%;
`;

const TabSection = styled.div`
  height: 58px;
  flex-direction: row;
  justify-content: space-around;
  border-color: rgba(128,128,128,1);
  border-width: 0px;
  border-bottom-width: 1px;
  margin-top: 9px;
  border-style: solid;
  display: flex;
`;

const NotifsTab = styled.div`
  width: 127px;
  height: 59px;
  align-self: center;
  margin-right: 0px;
  margin-left: 0px;
  border-color: #036bbd;
  border-width: 0px;
  border-bottom-width: 3px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border-style: solid;
`;

const Text = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  align-self: center;
`;

const MessagesTab = styled.div`
  width: 101px;
  height: 59px;
  align-self: center;
  margin-right: 0px;
  margin-left: 0px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text2 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  align-self: center;
`;

const ModMailTab = styled.div`
  width: 95px;
  height: 59px;
  align-self: center;
  margin-right: 0px;
  margin-left: 0px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text3 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-left: 10px;
`;

const AllActivity = styled.div`
  width: 187px;
  height: 26px;
  flex-direction: row;
  display: flex;
  margin-top: 14px;
  margin-left: 15px;
`;

const Text5 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  margin-left: 10px;
  margin-top: 3px;
`;

const Icon2Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 18px;
  margin-top: 3px;
`;

const HeaderColumn = styled.div`
  flex-direction: column;
  margin-top: 22px;
  display: flex;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  top: 0px;
  left: 0px;
  background-color: rgba(0,0,0,1);
  position: absolute;
  flex-direction: column;
  right: 0px;
  bottom: 49px;
  justify-content: flex-start;
`;

const TrendingNotif = styled.div`
  height: 110px;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  justify-content: space-around;
  display: flex;
`;

const Content = styled.div`
  width: 294px;
  height: 80px;
  align-self: center;
  margin-top: 10px;
  flex-direction: column;
  display: flex;
`;

const Text6 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;

const Text7 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: 13px;
`;

const Text8 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: 13px;
`;

const DividerStack = styled.div`
  flex: 1 1 0%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Notifications;
