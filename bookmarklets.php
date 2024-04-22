<?php $pageTitle = 'Bookmarklets - Weston Huggins'; ?>
<?php include('component-head.php'); ?>

<div class="page-standard">
    <h1>Bookmarklets</h1>
    <h3 class="d-inline">LinkedIn Hide Promoted Jobs</h3> - <a href="javascript: (() => { const jobList = document.querySelector('.jobs-search-results-list'); jobList.addEventListener('scroll', removePromoted); jobList.scrollTo({top: jobList.scrollHeight, left: 0, behavior: 'smooth'}); function removePromoted() { if (jobList.scrollTop >= jobList.scrollHeight - jobList.offsetHeight*2) { setTimeout(() => { jobList.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }, 500); setTimeout(() => { const jobsElements = document.querySelectorAll('.job-card-list__footer-wrapper'); console.log(jobsElements); jobsElements.forEach(job => { if (job.children[0].innerHTML.includes('Promoted')) { console.log('this one is promoted!'); /* job.parentElement.parentElement.parentElement.style.backgroundColor = 'lightgray'; */ job.parentElement.parentElement.parentElement.style.display = 'none'; } }); }, 1000); jobList.removeEventListener('scroll', removePromoted); } } })();">Bookmark this link to use the tool.</a>
    <p>The LinkedIn Hide Promoted Jobs bookmarklet automatically removes promoted jobs on the job search page. I was inspired to make this because the LinkedIn job search is not very good and 90% of promoted jobs are completely irrelevant to the search query.</p>
    <a href="https://github.com/westonh2/Linkedin-Hide-Promoted-Jobs" target="_blank" rel="nofollow">GitHub repo here.</a>
</div>

</body>
</html>