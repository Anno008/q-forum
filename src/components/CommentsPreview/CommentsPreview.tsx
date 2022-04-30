import { FlexGrid, NavLinkWithoutDecoration, Paragraph } from "../atoms";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchPostComments } from "~/api/services/postService";
import { Comment } from "~/models/Comment";
import ResponseCard from "../ResponseCard";
import { postsRoute } from "~/navigation/routes";
import Loader from "../Loader";
import withConsoleLog from "~/decorators/withConsoleLog";

type Props = {
  postId: number;
};

const CommentsPreview: React.FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    fetchPostComments(0, 2, postId)
      .then(setComments)
      .catch(err => toast.error(err.message || "Failed to load comments"));
  }, [postId]);

  return (
    <FlexGrid
      margin="20px 0 0 40px"
      minHeight="200px"
      flexDirection="column"
      flex="1"
      gap="16px"
      flexWrap="wrap"
      justifyContent="flex-end"
      alignItems="stretch">
      {!comments ? (
        <FlexGrid alignItems="center" justifyContent="center" flex="1">
          <Loader />
        </FlexGrid>
      ) : (
        <>
          {comments.map(c => (
            <ResponseCard
              renderWrapper={content => <>{content}</>}
              body={c.body}
              title={c.name}
              key={c.id}
              renderUser={() => <Paragraph>{c.email}</Paragraph>}
            />
          ))}
          <NavLinkWithoutDecoration to={`${postsRoute}/${postId}`}>
            <Paragraph useTextShadow>View whole discussion</Paragraph>
          </NavLinkWithoutDecoration>
        </>
      )}
    </FlexGrid>
  );
};

export default withConsoleLog(CommentsPreview);
