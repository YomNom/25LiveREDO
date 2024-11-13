<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    import EventForm from "./event_form.svelte";
</script>

<main class="main">
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
    .main {
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-size: 1.5rem;
    }
    .navbar {
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