class TurbowarpAddonsExtension {
    getInfo() {
      return {
        id: 'turbowarpaddons', // change this if you make an actual extension!
        name: 'TurboWarp Addons',
        blocks: [
          {
            opcode: 'strictlyEquals',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] strictly equals [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'First value'
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Second value'
              }
            }
          },
          {
            opcode: 'doesntStrictlyEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] doesn\'t strictly equal [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'First value'
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Second value'
              }
            }
          },
          {
            opcode: 'blockReturn',
            blockType: Scratch.BlockType.COMMAND,
            text: 'return [ONE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'First value'
              }
            }
          },
          {
            opcode: 'blockTrue',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true'
          },
          {
            opcode: 'blockFalse',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false'
          },
          {
            opcode: 'blockThrow',
            blockType: Scratch.BlockType.COMMAND,
            text: 'throw error [ONE] into console',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'First value'
              }
            }
          }
        ]
      };
    }
    strictlyEquals(args) {
        // Note strict equality: Inputs must match exactly: in type, case, etc.
        return args.ONE === args.TWO;
    }
    doesntStrictlyEqual(args) {
        // Note strict equality: Inputs must match exactly: in type, case, etc.
        return args.ONE !== args.TWO;
    }
    blockReturn(args) {
        return args.ONE;
    }
    blockTrue() {
        return true;
    }
    blockFalse() {
        return false;
    }
    blockThrow(args) {
        e = args.ONE;
        console.error(e)
    }
  }
Scratch.extensions.register(new TurbowarpAddonsExtension());