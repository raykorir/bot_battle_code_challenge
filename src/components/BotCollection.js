import React, { useState } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({ bots, addBot, deleteBot }) {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleEnlist = (bot) => {
    addBot(bot);
  };
  const handleClickEvent = (bot) => {
    setSelectedBot(bot);

    console.log("Bot clicked:", bot);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} handleEnlist={handleEnlist} handleGoBack={handleGoBack} />
      ) : (
        <div className="ui four column grid">
          <div className="row">
            {bots.map((bot) => (
              <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={handleClickEvent}
            deleteBot={deleteBot}
          />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BotCollection;
