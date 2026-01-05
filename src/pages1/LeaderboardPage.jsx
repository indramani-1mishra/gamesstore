import LeaderboardBanner from "./LeaderboardBanner";
import LeaderboardContent from "./LeaderboardContent";
import RecentGames from "./RecentGames";

export default function LeaderboardPage() {
  return (
    <>
      <LeaderboardBanner/>
      <LeaderboardContent />
      <RecentGames/>
    </>
  );
}