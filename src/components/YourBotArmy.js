import React from 'react';
import BotCard from './BotCard';

function BotArmy({ bots, clickEvent, removeBot }) {
	const handleRelease = (bot) => {
		removeBot(bot);
	};

	return (
		<div className='ui segment inverted olive bot-army'>
			<div className='ui five column grid'>
				<div className='row bot-army-row'>
					<strong>Your Bot Army</strong>
					{bots.map((bot) => (
						<div key={bot.id} className='column'>
							<BotCard
								bot={bot}
								deleteBot={removeBot}
								clickEvent={clickEvent}
								releaseBot={() => handleRelease(bot)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BotArmy;
