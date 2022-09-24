import React from 'react';
import { Grid, Paper, Typography, Link, Button } from "@material-ui/core"

function Login() {
    const paperStyle = { padding: 20, height: 'auto', width: 340, margin: '20px auto', backgroundColor: 'white' }
    const backgroundColorAvatar = {
        width: "50px"
    };
    const styleTextField = { marginBottom: '10px' }

    return (
        <div className="">
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center" style={{ backgroundColor: 'white' }}>
                        <img src="" style={backgroundColorAvatar} />
                        <h4 className='mt-3'>S'authetifier</h4>
                        <i className='fa fa-user-circle fa-2x'></i>
                    </Grid>

                    <div className="form-group mt-4">
                        <label className="mt-1">Entrer votre adresse email</label>
                        <input placeholder="Nom d'utilisateur ou email" required
                            className='form-control mt-1'
                        />
                    </div>

                    <div className="form-group mt-2">
                        <label>Votre mot de passe</label>
                        <input className='form-control mt-1' type="password" style={styleTextField}
                            placeholder="Mot de passe" 
                            required />
                    </div>

                    <Button variant="contained" className='mt-3' fullWidth style={{backgroundColor: '#0c50a2', color: "#fff"}}>
                        Se connecter
                    </Button>

                    <Typography>
                        <Link href="#">
                            Mot de passe oublié ?
                        </Link>
                    </Typography>


                    <Typography className='mb-2'>
                        N'avez-vous pas un compte ? <a href="https://inscription.onyo-bt.com">
                            S'inscrire
                        </a>
                    </Typography>
                    <br />
                    <br />
                </Paper>
            </Grid>
        </div>
    )
}

export default Login