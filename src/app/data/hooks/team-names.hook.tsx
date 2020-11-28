import * as React from 'react';

interface TeamNamesProviderProps {
  team1: {
    name: string;
    player1: string;
    player2: string;
  };
  team2: {
    name: string;
    player3: string;
    player4: string;
  };
}

interface TeamNameContextProps {
  teamNames: TeamNamesProviderProps;
  setNames: (names: TeamNamesProviderProps) => void;
}

const TeamNameContext = React.createContext<TeamNameContextProps>({} as TeamNameContextProps);

export const TeamNamesProvider: React.FC = (props) => {
  const [teamNames, setTeamNames] = React.useState<TeamNamesProviderProps>({} as TeamNamesProviderProps);

  const setNames = (names: TeamNamesProviderProps) => {
    setTeamNames(names);
  };

  return <TeamNameContext.Provider value={{ teamNames, setNames }}>{props.children}</TeamNameContext.Provider>;
};

export const useNames = (): TeamNameContextProps => {
  const context = React.useContext(TeamNameContext);

  if (!context) {
    throw new Error('the hook useNames must be used within a TeamNamesProvider');
  }

  return context;
};
