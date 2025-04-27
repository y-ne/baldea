<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>New Baldea</title>
	<meta name="description" content="Reborn after the original Baldea" />
</svelte:head>

{@render children()}
