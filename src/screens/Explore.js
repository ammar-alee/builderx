import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderSection from "../components/HeaderSection";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import ZocialIcon from "react-native-vector-icons/dist/Zocial";
import Footer from "../components/Footer";

function Explore() {
  return (
    <Container>
      <HeaderSectionColumn>
        <HeaderSection
          style={{
            height: 60
          }}
        />
        <ExploreTabs>
          <Rect2>
            <Text>Subscriptions</Text>
          </Rect2>
          <Rect3>
            <Text2>Custom Feed</Text2>
          </Rect3>
        </ExploreTabs>
        <RecentlyVisited>Recently visited subreddits</RecentlyVisited>
        <ScrollAreaStack>
          <ScrollArea>
            <Rect6>
              <Rect5>
                <Image src={require("../assets/images/gita.jpg")} />
                <Text7>27.2k members</Text7>
                <Text4>r/Art</Text4>
              </Rect5>
            </Rect6>
            <Rect7>
              <Rect5>
                <Image src={require("../assets/images/gita.jpg")} />
                <Text7>27.2k members</Text7>
                <Text4>r/AskReddit</Text4>
              </Rect5>
            </Rect7>
            <Rect8>
              <Rect5>
                <Image src={require("../assets/images/gita.jpg")} />
                <Text7>27.2k members</Text7>
                <Text4>r/Jokes</Text4>
              </Rect5>
            </Rect8>
          </ScrollArea>
          <CommunitiesWrapper>
            <All>
              <AllIconRow>
                <AllIcon>
                  <EntypoIcon
                    name="bar-graph"
                    style={{
                      color: "rgba(255,255,255,1)",
                      fontSize: 20,
                      alignSelf: "center"
                    }}
                  />
                </AllIcon>
                <AllText>All</AllText>
              </AllIconRow>
            </All>
            <Communities>COMMUNITIES</Communities>
            <OtherCommunities>
              <Rect14>
                <Rect15Row>
                  <Rect15>
                    <MaterialCommunityIconsIcon
                      name="reddit"
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: 20,
                        alignSelf: "center"
                      }}
                    />
                  </Rect15>
                  <Text11>r/announcements</Text11>
                </Rect15Row>
              </Rect14>
              <Rect16>
                <Rect17Row>
                  <Rect17>
                    <MaterialCommunityIconsIcon
                      name="reddit"
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: 20,
                        alignSelf: "center"
                      }}
                    />
                  </Rect17>
                  <Text12>r/AMA</Text12>
                </Rect17Row>
              </Rect16>
              <Rect18>
                <Rect19Row>
                  <Rect19>
                    <MaterialCommunityIconsIcon
                      name="reddit"
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: 20,
                        alignSelf: "center"
                      }}
                    />
                  </Rect19>
                  <Text13>r/Batman</Text13>
                </Rect19Row>
              </Rect18>
              <Rect20>
                <Rect21Row>
                  <Rect21>
                    <MaterialCommunityIconsIcon
                      name="reddit"
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: 20,
                        alignSelf: "center"
                      }}
                    />
                  </Rect21>
                  <Text14>r/Bandersnatch</Text14>
                </Rect21Row>
              </Rect20>
              <Rect22>
                <Rect23Row>
                  <Rect23>
                    <ZocialIcon
                      name="android"
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: 20,
                        alignSelf: "center"
                      }}
                    />
                  </Rect23>
                  <Text15>r/Android</Text15>
                </Rect23Row>
              </Rect22>
            </OtherCommunities>
          </CommunitiesWrapper>
        </ScrollAreaStack>
      </HeaderSectionColumn>
      <HeaderSectionColumnFiller />
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

const ExploreTabs = styled.div`
  height: 48px;
  background-color: rgba(0,0,0,1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  display: flex;
`;

const Rect2 = styled.div`
  width: 158px;
  align-self: stretch;
  border-color: #026bbd;
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

const Rect3 = styled.div`
  width: 163px;
  align-self: stretch;
  flex-direction: column;
  display: flex;
`;

const Text2 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: 14px;
  align-self: center;
`;

const RecentlyVisited = styled.span`
  font-family: Arial;
  color: #808080;
  font-size: 16px;
  margin-top: 18px;
  margin-left: 22px;
`;

const ScrollArea = styled.div`
  overflow-x: scroll;
  top: 0px;
  width: 360px;
  height: 143px;
  background-color: rgba(0,0,0,1);
  position: absolute;
  flex-direction: row;
  align-items: center;
  left: 0px;
`;

const Rect6 = styled.div`
  width: 156px;
  height: 128px;
  margin-left: 16px;
  flex-direction: row;
  display: flex;
`;

const Rect5 = styled.div`
  background-color: rgba(100,85,85,1);
  opacity: 0.14;
  border-radius: 10px;
  width: 156px;
  flex-direction: column;
  display: flex;
`;

const Image = styled.img`
  width: 156px;
  height: 64px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

const Text7 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 10px;
  margin-top: 27px;
  margin-left: 44px;
`;

const Text4 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 1px;
  margin-top: -35px;
  margin-left: 58px;
`;

const Rect7 = styled.div`
  width: 156px;
  height: 128px;
  margin-left: 16px;
  flex-direction: row;
  display: flex;
`;

const Rect8 = styled.div`
  width: 156px;
  height: 128px;
  margin-left: 16px;
  flex-direction: row;
  display: flex;
`;

const CommunitiesWrapper = styled.div`
  top: 139px;
  left: 22px;
  width: 290px;
  height: 347px;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
`;

const All = styled.div`
  width: 62px;
  height: 27px;
  flex-direction: row;
  display: flex;
`;

const AllIcon = styled.div`
  width: 26px;
  height: 27px;
  background-color: #ff4500;
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const AllText = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  margin-left: 12px;
  margin-top: 3px;
`;

const AllIconRow = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const Communities = styled.span`
  font-family: IBM Plex Sans;
  color: #7f8182;
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
`;

const OtherCommunities = styled.div`
  width: 218px;
  height: 238px;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
`;

const Rect14 = styled.div`
  height: 30px;
  align-self: stretch;
  flex-direction: row;
  display: flex;
`;

const Rect15 = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ff4500;
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text11 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 16px;
  margin-left: 16px;
  margin-top: 7px;
`;

const Rect15Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 45px;
`;

const Rect16 = styled.div`
  height: 30px;
  align-self: stretch;
  flex-direction: row;
  display: flex;
`;

const Rect17 = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ff4500;
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text12 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 16px;
  margin-left: 16px;
  margin-top: 7px;
`;

const Rect17Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 127px;
`;

const Rect18 = styled.div`
  height: 30px;
  align-self: stretch;
  flex-direction: row;
  display: flex;
`;

const Rect19 = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(236,27,12,1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text13 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 16px;
  margin-left: 16px;
  margin-top: 7px;
`;

const Rect19Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 104px;
`;

const Rect20 = styled.div`
  height: 30px;
  align-self: stretch;
  flex-direction: row;
  display: flex;
`;

const Rect21 = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(74,144,226,1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text14 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 16px;
  margin-left: 16px;
  margin-top: 7px;
`;

const Rect21Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 60px;
`;

const Rect22 = styled.div`
  height: 30px;
  align-self: stretch;
  flex-direction: row;
  display: flex;
`;

const Rect23 = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(169,203,8,1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text15 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 16px;
  margin-left: 16px;
  margin-top: 7px;
`;

const Rect23Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 104px;
`;

const ScrollAreaStack = styled.div`
  width: 360px;
  height: 486px;
  margin-top: 18px;
  position: relative;
`;

const HeaderSectionColumn = styled.div`
  flex-direction: column;
  margin-top: 22px;
  display: flex;
`;

const HeaderSectionColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
  height: 100%;
`;

export default Explore;
