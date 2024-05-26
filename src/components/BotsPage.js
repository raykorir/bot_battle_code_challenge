import React, { useEffect, useState } from 'react';
import BotsCollection from './BotCollection';
import BotArmy from './YourBotArmy';
import SortBar from './SortBar';
import '../index.css'
function BotsPage() {
	const [bots, setBots] = useState([]);
	const [sortedBots, setSortedBots] = useState([]);
	const [sortOption, setSortOption] = useState(null);

	useEffect(() => {
		fetch('https://bot-battle-backend.onrender.com/bots')
			.then((resp) => resp.json())
			.then((data) => {
				setBots(data);
				setSortedBots(data);
			});
	}, []);

	const [enlistedClasses, setEnlistedClasses] = useState([]);

	const addBot = (bot) => {
		if (!bot.army && !enlistedClasses.includes(bot.bot_class)) {
			setBots((prevBots) =>
				prevBots.map((b) => (b.id === bot.id ? { ...b, army: true } : b))
			);
			setEnlistedClasses((prevClasses) => [...prevClasses, bot.bot_class]);
		}
	};

	const removeBot = (bot) => {
		setBots((prevBots) =>
			prevBots.map((b) => (b.id === bot.id ? { ...b, army: false } : b))
		);
		setEnlistedClasses((prevClasses) =>
			prevClasses.filter((className) => className !== bot.bot_class)
		);
	};

	const deleteBot = (bot) => {

		const confirmDelete = window.confirm(
			'Are you sure you want to delete this bot?'
		);

		if (confirmDelete) {
			
			setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
			setEnlistedClasses((prevClasses) =>
				prevClasses.filter((className) => className !== bot.bot_class)
			);
		} else{
      return
    }
	};

	const handleSort = (option) => {
		setSortOption(option);
		if (option === 'health') {
			setSortedBots([...bots].sort((a, b) => a.health - b.health));
		} else if (option === 'damage') {
			setSortedBots([...bots].sort((a, b) => a.damage - b.damage));
		} else if (option === 'armor') {
			setSortedBots([...bots].sort((a, b) => a.armor - b.armor));
		}
	};

	return (
		<div>
			<BotArmy
				bots={bots.filter((b) => b.army)}
				removeBot={removeBot}
				deleteBot={deleteBot}
			/>
			<SortBar handleSort={handleSort} />
			<BotsCollection
				bots={sortOption ? sortedBots : bots}
				addBot={addBot}
				deleteBot={deleteBot}
			/>
		</div>
	);
}

export default BotsPage;
