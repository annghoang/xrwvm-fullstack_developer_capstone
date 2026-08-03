<input type="text" name="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
<input type="text" name="firstname" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
<input type="text" name="lastname" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
<input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
<input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
<button type="submit" className="btn btn-primary">Register</button>
