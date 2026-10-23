import subprocess
from pathlib import Path
subprocess.run(['node','build.mjs'],cwd=Path(__file__).resolve().parent,check=True)
