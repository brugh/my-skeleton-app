<script>
	import { locale } from 'svelte-i18n';
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<span class="flex flex-row justify-around my-4 sm:!my-0">
	<a
		class="p-2 w-16 sm:p-0 sm:w-16"
		class:active={$locale?.startsWith('en')}
		href=""
		on:keypress={() => {
			locale.set('en');
		}}
		on:click={() => {
			locale.set('en');
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 640 480">
			<path fill="#bd3d44" d="M0 0h640v480H0" />
			<path
				stroke="#fff"
				stroke-width="37"
				d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
			/>
			<path fill="#192f5d" d="M0 0h364.8v258.5H0" />
			<marker id="a" markerHeight="30" markerWidth="30">
				<path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
			</marker>
			<path
				fill="none"
				marker-mid="url(#a)"
				d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"
			/>
		</svg>
	</a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		class="p-2 w-16 sm:p-0 sm:w-16"
		class:active={$locale?.startsWith('nl')}
		href=""
		on:keypress={() => {
			locale.set('nl');
		}}
		on:click={() => {
			locale.set('nl');
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-nl" viewBox="0 0 640 480">
			<path fill="#21468b" d="M0 0h640v480H0z" />
			<path fill="#fff" d="M0 0h640v320H0z" />
			<path fill="#ae1c28" d="M0 0h640v160H0z" />
		</svg>
	</a>
</span>

<style lang="postcss">
	.active {
		@apply border-b-[5px] border-sky-500;
	}
</style>
