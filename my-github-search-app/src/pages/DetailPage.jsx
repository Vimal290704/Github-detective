/* eslint-disable no-unused-vars */
import React from "react";
import { useOutletContext } from "react-router-dom";
import useGitHubData from "../Hooks/useGitHubUser";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import UserCard from "../components/UserCard";
import RepoList from "../components/RepoList";
import FollowerList from "../components/FollowerList";
import FollowingList from "../components/FollowingList";
import GistList from "../components/GistList";
import OrgList from "../components/OrgList";
import EventsList from "../components/EventsList";
import ReceivedEventsList from "../components/ReceivedEventsList";
import StarredList from "../components/StarredList";
import SubscriptionsList from "../components/SubscriptionsList";

const DetailPage = ({ detailKey }) => {
  const { username } = useOutletContext();
  const endpoint = detailKey;
  const { data, error, loading } = useGitHubData(username, endpoint);
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return null;
  switch (detailKey) {
    case "overview":
      return <UserCard user={data} />;
    case "repos":
      console.log(data);
      return <RepoList repos={data} />;
    case "followers":
      return <FollowerList followers={data} />;
    case "following":
      return <FollowingList following={data} />;
    case "gists":
      return <GistList gists={data} />;
    case "orgs":
      return <OrgList orgs={data} />;
    case "events":
      return <EventsList events={data} />;
    case "received_events":
      return <ReceivedEventsList events={data} />;
    case "starred":
      return <StarredList repos={data} />;
    case "subscriptions":
      return <SubscriptionsList repos={data} />;
    default:
      return <div>No data available.</div>;
  }
};

export default DetailPage;
