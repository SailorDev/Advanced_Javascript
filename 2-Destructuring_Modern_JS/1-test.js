let user = {
	name: "Muhammed",
	handle: "@alaa"
};

let name = user.name;
name = "kamal";
console.log(name)

var {name, handle, location} = user;
// ---------------------------------- //

function getUser() {
  return {
      name: "Muhammed",
      handle: "@alaa",
      location: "ismailia, egypt"
  }
};

var {name, handle, location} = getUser();
// ---------------------------------- //

var user = ["Muhammed", "@alaa", "ismailia, egypt"];

var [name, handle, location] = user;
// ---------------------------------- //

var csv = "1998, Ford, F23io, Must Sell";

var [year, make, model, description] = csv.split(',');

// ---------------------------------- //

var user2 = {
	n: "Muhammed",
	h: "@alaa",
	l: "ismailia, egypt"
};

let {n: name, h: handle, l: location} = user2;

console.log(name)
console.log(handle)
console.log(location)
// ---------------------------------- //

function fetchRepos({language='All', minStars=0, maxStars='', createBefore='', createAfter=''}) {

};

// fetchRepos('java', 100, null, new Date('01,01/2019').getTime(), null);

fetchRepos({
	language: 'java',
	// maxStars: null,
	// createAfter: null,
	createBefore: new Date('01,01/2019').getTime(),
	minStars: 100
});

// ---------------------------------- //
function getUserData(player) {
	return Promise.all([
		getProfile(player),
		getRepos(player)
	]).then(function (data) {
		var profile = data[0];
		var repos = data[1];
		// var [profile, repos] = data;    // destructuring

		return {
			profile: profile,
			repos: repos
		}
	})
}
///  

function getUserData(player) {
	return Promise.all([
		getProfile(player),
		getRepos(player)
	]).then(function ([profile, repos]) {      // ddestructuring
		return {
			profile: profile,
			repos: repos
		}
	})
}
///  

function getUserData(player) {
	return Promise.all([
		getProfile(player),
		getRepos(player)
	]).then(([ profile, repos ]) => ({ profile, repos }))    // destructuring
}




















