import React from 'react';

function BotSpecs({ bot, handleEnlist, handleGoBack }) {
	const botTypeClasses = {
		Assault: 'icon military',
		Defender: 'icon shield',
		Support: 'icon plus circle',
		Medic: 'icon ambulance',
		Witch: 'icon magic',
		Captain: 'icon star',
	};

	return (
		<div className='ui column'>
			<div className='ui card' key={bot.id}>
				<div className='image'>
					<img alt='oh no!' src={bot.avatar_url} />
				</div>
				<div className='content'>
					<div className='header'>
						{bot.name}
						<i className={botTypeClasses[bot.bot_class]} />
					</div>
					<div className='meta text-wrap'>
						<small>{bot.catchphrase}</small>
					</div>
				</div>
				<div className='extra content'>
					<span>
						<i className='icon heartbeat red' />
						{bot.health}
					</span>

					<span>
						<i className='icon lightning yellow' />
						{bot.damage}
					</span>
					<span>
						<i className='icon shield blue' />
						{bot.armor}
					</span>
				</div>
				<div className='extra content'>
					<button
						className='ui mini red button'
						onClick={() => handleEnlist(bot)}
					>
						Enlist
					</button>
					<button className='ui mini button' onClick={handleGoBack}>
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
}

export default BotSpecs;
