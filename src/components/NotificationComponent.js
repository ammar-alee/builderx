import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function NotificationComponent(props) {
  return (
    <Container {...props}>
      <CommentRow>
        <MaterialCommunityIconsIcon
          name="comment"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 20,
            alignSelf: "flex-start",
            height: 20,
            width: 20,
            marginTop: 2
          }}
        />
        <NotificationData>
          <NotificationHeading>
            {props.NotificationHeading ||
              "u/ABC replied to your post in r/pics."}
          </NotificationHeading>
          <NotificationContent>
            {props.notificationContent || "You should check it out."}
          </NotificationContent>
          <Time>{props.Time || "Post reply • 1h"}</Time>
        </NotificationData>
      </CommentRow>
      <CommentRowFiller />
      <MaterialCommunityIconsIcon
        name="dots-vertical"
        style={{
          color: "grey",
          fontSize: 20,
          alignSelf: "flex-start",
          height: 20,
          width: 20,
          marginRight: 8,
          marginTop: 16
        }}
      />
    </Container>
  );
}

const Container = styled.div`
 background-color: rgba(0,0,0,1);
`;

const NotificationData = styled.div`
  width: 267px;
  height: 77px;
  align-self: center;
  flex-direction: column;
  display: flex;
  margin-left: 14px;
`;

const NotificationHeading = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;

const NotificationContent = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: 22px;
`;

const Time = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: 6px;
`;

const CommentRow = styled.div`
  height: 77px;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 14px;
  display: flex;
`;

const CommentRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
  height: 100%;
`;

export default NotificationComponent;
