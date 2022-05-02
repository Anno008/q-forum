import { Button, FlexGrid } from "../atoms";
import { useState, useEffect } from "react";
import ScrollToTopButton from "../ScrollToTopButton";
import { toast } from "react-toastify";
import Loader from "../Loader";
import { LIMIT } from "~/constants/config";
import { useConsoleLog } from "~/hooks/useConsoleLog";

type Props<T extends { id: number }> = {
  fetchItemsFn: (offset: number, limit: number, id: number) => Promise<T[]>;
  renderItem: (item: T) => JSX.Element;
  arg: number;
};

const List = <T extends { id: number }>({ arg, fetchItemsFn, renderItem }: Props<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const [offset, setOffset] = useState(0);
  useConsoleLog(List.name);

  useEffect(() => {
    setOffset(0);
    setItems([]);
  }, [arg]);

  useEffect(() => {
    fetchItemsFn(offset, LIMIT, arg)
      .then(p =>
        setItems(prev => [...new Map([...prev, ...p].map(item => [item.id, item])).values()])
      )
      .catch(err => toast.error(err.message || "Failed to fetch"));
  }, [fetchItemsFn, offset, arg]);

  return (
    <FlexGrid flexDirection="column" gap="16px" flexWrap="wrap">
      <FlexGrid
        flex="1"
        alignItems="center"
        flexDirection="row"
        justifyContent="flex-end"></FlexGrid>
      {items.length === 0 ? (
        <FlexGrid alignItems="center" justifyContent="center">
          <Loader />
        </FlexGrid>
      ) : (
        items.map(p => renderItem(p))
      )}
      {items.length > offset && items.length >= LIMIT && (
        <Button
          onClick={() => {
            setOffset(previousOffset => previousOffset + LIMIT);
          }}>
          Load more
        </Button>
      )}
      <ScrollToTopButton />
    </FlexGrid>
  );
};

export default List;
