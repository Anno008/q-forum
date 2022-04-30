import React, { useState } from "react";
import { fetchPosts } from "~/api/services/postService";

import { FlexGrid, H1, NavLinkWithoutDecoration } from "~/components/atoms";
import CommentsPreview from "~/components/CommentsPreview";
import List from "~/components/List";
import MainLayout from "~/components/MainLayout";
import ResponseCard from "~/components/ResponseCard";
import UserFilter from "~/components/UserFilter";
import UserInfo from "~/components/UserInfo";
import withConsoleLog from "~/decorators/withConsoleLog";
import { Post } from "~/models/Post";
import { postsRoute } from "~/navigation/routes";
import locators from "~/testUtils/locators";
import { setTestId } from "~/testUtils/setTestId";

const PostsPage: React.FC = () => {
  const [userIdFilter, setUserIdFilter] = useState(0);

  return (
    <MainLayout flexDirection="column" contentContainerTestId={locators.postPageContainer}>
      <FlexGrid alignItems="center" justifyContent="space-between">
        <H1>Posts page</H1>
        <UserFilter onUserFilterChange={setUserIdFilter} />
      </FlexGrid>
      <List<Post>
        fetchItemsFn={fetchPosts}
        arg={userIdFilter}
        renderItem={post => (
          <ResponseCard
            key={post.id}
            renderWrapper={content => (
              <NavLinkWithoutDecoration
                to={`${postsRoute}/${post.id}`}
                {...setTestId(`${locators.postPageItem}-${post.id}`)}>
                {content}
              </NavLinkWithoutDecoration>
            )}
            title={post.title}
            body={post.body}
            renderUser={() => <UserInfo userId={post.userId} />}
            renderAdditionalContent={() => <CommentsPreview postId={post.id} />}
          />
        )}
      />
    </MainLayout>
  );
};

export default withConsoleLog(PostsPage);
