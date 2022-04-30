import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchPost, fetchPostComments } from "~/api/services/postService";

import { FlexGrid, H2, Paragraph } from "~/components/atoms";
import List from "~/components/List";
import Loader from "~/components/Loader";
import MainLayout from "~/components/MainLayout";
import ResponseCard from "~/components/ResponseCard";
import UserInfo from "~/components/UserInfo";
import withConsoleLog from "~/decorators/withConsoleLog";
import { Comment } from "~/models/Comment";
import { Post } from "~/models/Post";
import locators from "~/testUtils/locators";

const PostDetailsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (id) {
      fetchPost(id)
        .then(setPost)
        .catch(err => toast.error(err.message || "Failed to fetch post"));
    }
  }, [id]);

  return (
    <MainLayout flexDirection="column" contentContainerTestId={locators.postPageDetailsContainer}>
      {!post && (
        <FlexGrid alignItems="center" justifyContent="center" flex="1">
          <Loader />
        </FlexGrid>
      )}
      {post && (
        <FlexGrid flexDirection="column" gap="20px">
          <FlexGrid alignItems="center" justifyContent="space-between">
            <H2 margin="0">{post.title}</H2>
            <UserInfo userId={post.userId} />
          </FlexGrid>
          <Paragraph>{post.body}</Paragraph>
          <List<Comment>
            fetchItemsFn={fetchPostComments}
            arg={post.id}
            renderItem={comment => (
              <ResponseCard
                renderWrapper={content => <>{content}</>}
                title={comment.name}
                body={comment.body}
                key={comment.id}
                renderUser={() => <Paragraph>{comment.email}</Paragraph>}
              />
            )}
          />
        </FlexGrid>
      )}
    </MainLayout>
  );
};
export default withConsoleLog(PostDetailsPage);
