class GitHub {
    constructor(){
        this.client_id = 'ac5c807be21da1fda461';
        this.client_secret = '3f34220782ccc22395df4119e9e61f0685fee98f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}