import torch
import torchvision.transforms as transforms
from PIL import Image
from torch import nn

# Definindo a arquitetura do SRGAN (apenas um exemplo simplificado)
class Generator(nn.Module):
    def __init__(self):
        super(Generator, self).__init__()
        # Aqui você deve definir a arquitetura completa do gerador SRGAN
        self.model = nn.Sequential(
            # Adicione suas camadas aqui
        )

    def forward(self, x):
        return self.model(x)

def load_model(model_path):
    model = Generator()
    model.load_state_dict(torch.load(model_path))
    model.eval()
    return model

def enhance_image(model, image_path, output_path):
    # Carregar a imagem
    img = Image.open(image_path).convert('RGB')
    
    # Transformações para normalização
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Resize((64, 64))  # Supondo que o modelo espera imagens de 64x64
    ])
    img_tensor = transform(img).unsqueeze(0)  # Adiciona dimensão do batch

    # Aplica o modelo
    with torch.no_grad():
        output_tensor = model(img_tensor)
    
    # Transformações para converter de volta para imagem
    to_pil = transforms.ToPILImage()
    output_image = to_pil(output_tensor.squeeze(0))

    # Salvar a imagem aprimorada
    output_image.save(output_path)

if __name__ == "__main__":
    model_path = 'srgan.pth'  # Caminho para o modelo treinado
    image_path = 'input_image.jpg'  # Caminho para a imagem de entrada
    output_path = 'enhanced_image.jpg'  # Caminho para a imagem de saída

    model = load_model(model_path)
    enhance_image(model, image_path, output_path)