import React from "react";
import {useForm, ValidationError} from "@formspree/react";

const Form: React.FC = () => {
    const [state, handleSubmit] = useForm("mblrwbza");
    if(state.succeeded) {
        return <p className="success">Votre message a bien été envoyé</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="col">
                <div className="form-group reveal-2">
                    <input type="text" name="prénom" id="prénom" className="form-control"
                           placeholder="Votre Prénom*" required/>
                    <ValidationError prefix="Prénom" field="prénom" errors={state.errors} />
                </div>
                <div className="form-group reveal-3">
                    <input type="text" name="nom" id="nom" className="form-control"
                           placeholder="Votre Nom*" required/>
                    <ValidationError prefix="Nom" field="nom" errors={state.errors} />
                </div>
            </div>
            <div className="col">
                <div className="form-group reveal-4">
                    <input type="email" name="email" id="email" className="form-control"
                           placeholder="Votre Adresse Email*" required/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="form-group reveal-5">
                    <input type="tel" name="numéro de téléphone" id="tel" className="form-control"
                           placeholder="Votre Numéro de téléphone"/>
                    <ValidationError prefix="Numéro de téléphone" field="numéro de téléphone" errors={state.errors} />
                </div>
            </div>
            <div className="form-group reveal-6">
                <select name="services" id="services" className="form-control" required>
                    <option value="site vitrine" selected>Site Vitrine</option>
                    <option value="site ecommerce">Site Ecommerce</option>
                    <option value="tunnel de vente">Tunnel de vente</option>
                    <option value="autre">Autre</option>
                </select>
                <ValidationError prefix="Services" field="services" errors={state.errors} />
            </div>
            <div className="form-group reveal-7">
                            <textarea name="message" id="message" placeholder="Votre Message"
                                      className="form-area" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="form-checkbox reveal-8">
                <input type="checkbox" name="conditions de soumission du formulaire"/>
                <label>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la <a href="/legals">Politique de confidentialité.</a></label>
                <ValidationError prefix="Conditions de soumission du formulaire" field="conditions de soumission du formulaire" errors={state.errors} />
            </div>
            <button className="btn btn-primary reveal-9" type="submit">Envoyer</button>
        </form>
    )
}

export default Form;
