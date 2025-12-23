export const App = () => {
	const year = new Date().getFullYear();

	const features = [
		{
			name: 'React',
			icon: '⚛️',
			description: 'UI declarativa y componible.',
			url: 'https://react.dev',
		},
		{
			name: 'Tailwind',
			icon: '🎨',
			description: 'Utility-first CSS para velocidad.',
			url: 'https://tailwindcss.com',
		},
		{
			name: 'Vite',
			icon: '⚡',
			description: 'Bundler rápido para DX moderna.',
			url: 'https://vitejs.dev',
		},
		{
			name: 'Bun',
			icon: '🧋',
			description: 'Runtime y gestor de paquetes.',
			url: 'https://bun.sh',
		},
		{
			name: 'Vitest',
			icon: '🧪',
			description: 'Testing alineado con Vite.',
			url: 'https://vitest.dev',
		},
		{
			name: 'Commitlint',
			icon: '📝',
			description: 'Commits consistentes y semánticos.',
			url: 'https://commitlint.js.org',
		},
		{
			name: 'Biome',
			icon: '🧹',
			description: 'Linting y formatting unificados.',
			url: 'https://biomejs.dev',
		},
		{
			name: 'Lefthook',
			icon: '🪝',
			description: 'Automatización de hooks de Git.',
			url: 'https://lefthook.dev',
		},
		{
			name: 'React Router Dom',
			icon: '🧭',
			description: 'Ruteo declarativo para SPAs.',
			url: 'https://reactrouter.com',
		},
	];

	return (
		<div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 flex flex-col">
			<main className="flex-1 flex flex-col items-center justify-center px-6">
				<h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
					Template Frontend React
				</h1>
				<p className="text-slate-400 mb-12 text-center max-w-xl">
					Base moderna y opinionada para desarrollo frontend con React.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
					{features.map((feature) => (
						<a
							key={feature.name}
							href={feature.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Abrir sitio oficial de ${feature.name}`}
							className="block">
							<div className="min-h-37.5 bg-slate-800/70 backdrop-blur rounded-2xl p-6 shadow-xl shadow-black/30 ring-1 ring-white/10 hover:shadow-2xl hover:shadow-black/40 transition-transform duration-200 ease-out hover:scale-105 cursor-pointer">
								<div className="h-8 mb-3 flex items-center">{feature.icon}</div>
								<h2 className="font-semibold">{feature.name}</h2>
								<p className="text-sm text-slate-400">{feature.description}</p>
							</div>
						</a>
					))}
				</div>
			</main>

			<footer className="py-4 text-center text-sm text-slate-500">
				<p>
					© {year}{' '}
					<a
						href="https://github.com/ezequiel-arevalo/template-frontend-react"
						target="_blank"
						rel="noopener noreferrer"
						className="text-slate-300 underline-offset-4 underline">
						Ezequiel Arevalo
					</a>
				</p>
			</footer>
		</div>
	);
};
