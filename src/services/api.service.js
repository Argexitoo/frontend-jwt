import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005',
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  verify = () => {
    return this.api.get('/auth/verify');
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };

  // DOGS ///////
  getMyDogs = () => {
    return this.api.get('/dog');
  };

  addNewDog = form => {
    return this.api.post('/dog/add', form);
  };

  getDog = id => {
    return this.api.get(`/dog/${id}`);
  };

  updateDog = (id, body) => {
    return this.api.put(`/dog/${id}`, body);
  };

  deleteDog = id => {
    return this.api.delete(`/dog/${id}`);
  };

  // MEETINGS ///////

  addNewMeeting = form => {
    return this.api.post(`/meetings/add`, form);
  };

  getMeetingsViews = () => {
    return this.api.get('/meetings');
  };

  getMyMeetings = () => {
    return this.api.get('/meetings/myMeetings');
  };

  getMeeting = id => {
    return this.api.get(`/meetings/${id}/info`);
  };

  updateMeeting = (id, body) => {
    return this.api.put(`/meetings/${id}`, body);
  };

  deleteMeeting = id => {
    return this.api.delete(`/meetings/${id}`);
  };

  joinedMeeting = id => {
    return this.api.get(`/meetings/${id}/joined`);
  };

  joinMeeting = id => {
    return this.api.post(`/meetings/${id}/join`);
  };

  unJoinMeeting = id => {
    return this.api.post(`meetings/${id}/unjoin`);
  };

  // PROFILE //////

  getProfile = () => {
    return this.api.get(`/profile`);
  };

  updateProfile = (id, body) => {
    return this.api.post(`/profile/${id}`, body);
  };

  getAllUsers = () => {
    return this.api.get(`profile/users`);
  };

  getUserProfile = id => {
    return this.api.get(`profile/users/${id}/info`);
  };
}

// Create one instance (object) of the service
const apiService = new ApiService();

export default apiService;
