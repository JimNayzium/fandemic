import { getLeagueData, getLeagueRosters, getLeagueTeamManagers, loadPlayers, waitForAll } from '$lib/utils/helper';

export async function load({fetch}) {
  const rostersInfo = waitForAll(
    getLeagueData(),
    getLeagueRosters(),
    getLeagueTeamManagers(),
    loadPlayers(fetch),
  );
  let return_object = { rostersInfo };
  return return_object;
}