from PIL import Image
import os

def optimize_image(input_path, output_path, target_size=(1200, 800)):
    """
    Optimize and resize an image while maintaining aspect ratio
    """
    with Image.open(input_path) as img:
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # Calculate aspect ratio
        aspect = img.width / img.height
        target_aspect = target_size[0] / target_size[1]
        
        if aspect > target_aspect:
            # Image is wider than target
            new_width = target_size[0]
            new_height = int(new_width / aspect)
        else:
            # Image is taller than target
            new_height = target_size[1]
            new_width = int(new_height * aspect)
            
        # Resize image
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Create new image with white background
        new_img = Image.new('RGB', target_size, (255, 255, 255))
        
        # Paste resized image in center
        x = (target_size[0] - new_width) // 2
        y = (target_size[1] - new_height) // 2
        new_img.paste(img, (x, y))
        
        # Save with optimization
        new_img.save(output_path, 'JPEG', quality=85, optimize=True)

def main():
    # Chemins fixes
    input_dir = output_dir = "D:/Site_PC_Media/OneSite/client/public/images/configs"
    
    print("\nDossier de travail :", input_dir)
    print("\nOptimisation de l'image pour la configuration Ultra")
    print("L'image sera redimensionnée à 1200x800 pixels\n")
    
    # List files in directory
    available_files = [f for f in os.listdir(input_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if not available_files:
        print("Aucune image trouvée dans le dossier. Veuillez ajouter des images et réessayer.")
        return
        
    print("Images disponibles :", available_files)
    
    while True:
        try:
            filename = input("Nom du fichier pour la config Ultra (avec extension) : ")
            if not filename:
                print("Opération annulée.")
                return
                
            input_path = os.path.join(input_dir, filename)
            if not os.path.exists(input_path):
                print("Fichier non trouvé, réessayez.")
                continue
                
            output_path = os.path.join(output_dir, "config-ultra.jpg")
            optimize_image(input_path, output_path)
            print(f"✓ Image optimisée et enregistrée : config-ultra.jpg")
            break
        except Exception as e:
            print(f"Erreur : {e}")
            print("Réessayez avec un autre fichier.")

    print("\nTerminé ! L'image a été optimisée et enregistrée.")

if __name__ == "__main__":
    main()
