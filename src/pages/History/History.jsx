import "../../assests/styles/must-watch.css";
import { HistoryCard, EmptyVideo } from "../../components/components";
import { useHistory } from "../../context/context";

export default function History() {
  const { state } = useHistory();
  const { dispatchHistory } = useHistory();
  const history = state.historyList;

  const historyMapping = () => {
    return history.map((item, index) => {
      return (
        <HistoryCard
          key={item.id}
          id={item.id}
          sr={index + 1}
          title={item.title}
          image={item.videoImage}
          videoUrl={item.videoUrl}
          Action={"Video"}
        />
      );
    });
  };

  return (
    <section>
      <div className="history-container">
        <h2>History</h2>
        <button
          className="primary-btn btn"
          onClick={() => {
            dispatchHistory({ type: "CLEAR_HISTORY" });
          }}
        >
          Clear Full History
        </button>
      </div>
      <div className="watch-later-container">
        {history.length ? historyMapping() : EmptyVideo("History")}
      </div>
    </section>
  );
}
