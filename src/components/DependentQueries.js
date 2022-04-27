import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEMail = async (email) => {
  return await axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = async (channelId) => {
  return await axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEMail(email)
  );
  const channelId = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  return <div>DependentQueries</div>;
};

export default DependentQueries;
