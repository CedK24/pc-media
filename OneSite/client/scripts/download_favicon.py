import requests
import os

def download_favicon(url, save_path):
    try:
        # Essayer d'abord le favicon.ico à la racine
        favicon_url = f"{url}/favicon.ico"
        response = requests.get(favicon_url)
        
        if response.status_code == 200:
            with open(save_path, 'wb') as f:
                f.write(response.content)
            print(f"✓ Favicon téléchargé avec succès : {save_path}")
            return True
            
        # Si pas trouvé, essayer de parser la page HTML pour trouver le lien
        response = requests.get(url)
        if response.status_code == 200:
            from bs4 import BeautifulSoup
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Chercher dans différentes balises link
            favicon_links = soup.find_all('link', rel=lambda x: x and ('icon' in x.lower() or 'shortcut' in x.lower()))
            
            if favicon_links:
                favicon_link = favicon_links[0].get('href', '')
                if not favicon_link.startswith('http'):
                    if favicon_link.startswith('//'):
                        favicon_link = 'https:' + favicon_link
                    elif favicon_link.startswith('/'):
                        favicon_link = url + favicon_link
                    else:
                        favicon_link = url + '/' + favicon_link
                
                response = requests.get(favicon_link)
                if response.status_code == 200:
                    with open(save_path, 'wb') as f:
                        f.write(response.content)
                    print(f"✓ Favicon téléchargé avec succès : {save_path}")
                    return True
        
        print("✗ Favicon non trouvé")
        return False
        
    except Exception as e:
        print(f"✗ Erreur lors du téléchargement : {str(e)}")
        return False

def main():
    url = "https://www.pcmedia24.com"
    save_path = "D:/Site_PC_Media/OneSite/client/public/favicon.ico"
    
    print(f"Téléchargement du favicon depuis {url}...")
    success = download_favicon(url, save_path)
    
    if success:
        print("\nLe favicon a été téléchargé et enregistré dans le dossier public de votre application React.")
    else:
        print("\nÉchec du téléchargement du favicon.")

if __name__ == "__main__":
    main()
