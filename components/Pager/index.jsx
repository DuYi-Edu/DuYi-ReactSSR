import styles from "./index.module.css";

function createSpan(content, newPage, onPageChange) {
  return (
    <span
      onClick={() => {
        onPageChange && onPageChange(newPage);
      }}
    >
      {content}
    </span>
  );
}

export default ({ page = 1, limit = 10, total = 0, onPageChange }) => {
  if (total === 0) {
    return null;
  }
  const pageNumber = Math.ceil(total / limit);
  return (
    <div className={styles.pager}>
      {page > 1 && createSpan("首页", 1, onPageChange)}
      {page > 1 && createSpan("上一页", page - 1, onPageChange)}
      {createSpan(`${page} / ${pageNumber}`)}
      {page < pageNumber && createSpan("下一页", page + 1, onPageChange)}
      {page < pageNumber && createSpan("尾页", pageNumber, onPageChange)}
    </div>
  );
};
