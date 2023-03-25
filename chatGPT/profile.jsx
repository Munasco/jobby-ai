import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Store the file or convert it to a format suitable for your application
      setProfile({ ...profile, resume: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the profile data using state management or API calls
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:{" "}
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Resume: <input type="file" onChange={handleFileUpload} />
        </label>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
