<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    import EventForm from "./event_form.svelte";
</script>

<main>
    <nav>
        <div class="navbar">
            <img src="/UC-ReadoutLogo.png" alt="UC Readout Logo" class="UClogo" width="125px" height="50px"/>
        </div>
    </nav>

    <div class="top-page">
        <EventForm />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        font-size: 1.5rem;
    }
    .navbar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #d91515;
    }

    .UClogo {
        margin-left: 20px; /* Adjust the value as needed */
    }
    
    .top-page {
        float: left;
        height: 40%;
        padding: 10px;
        box-sizing: border-box;
        background-color: #afabab;
    }
</style>