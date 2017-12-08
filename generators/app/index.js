const crypto =  require('crypto');
const jdenticon = require("jdenticon")
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

	_createHash() {
		const current_date = (new Date()).valueOf().toString();
		const random = Math.random().toString();
		return crypto.createHash('sha1').update(current_date + random).digest('hex');
	}

	initializing() {
	}

	prompting() {

    let prompts = [
			{
				type: 'input',
				name: 'name',
				message: 'Your first and last name:'
			},
			{
				type: 'input',
				name: 'tagLine',
				message: 'Sentence that describes you:'
			},
			{
				type: 'confirm',
				name: 'hasLinkedIn',
				default: false,
				message: 'Do you have a LinkedIn Account?'
			},
			{
				type: 'input',
				name: 'linkedIn',
				message: 'LinkedIn profile link: http://',
				when: (answers) => {
					return answers.hasLinkedIn === true;
				}
			},
			{
				type: 'confirm',
				name: 'hasGitHub',
				default: false,
				message: 'Do you have a GitHub account?'
			},
			{
				type: 'input',
				name: 'gitHub',
				message: 'Github profile link: http://',
				when: (answers) => {
					return answers.hasGitHub === true;
				}
			}
		]

		return this.prompt(prompts).then((props) => {
      this.props = props;
    });
	}

	writing() {
		const profilePicture = jdenticon.toPng(this.props.name.toLowerCase().split(' ').join(''), 300); // Create default icon

		this.fs.copy(this.templatePath(this.sourceRoot()), this.destinationPath(this.destinationRoot()));

		this.fs.write(this.destinationPath('src/images/headshot.png'), profilePicture);

    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), { name: `${this.props.name.toLowerCase().split(' ').join('')}-com` });

    this.fs.copyTpl(this.templatePath('src/views/index.pug'), this.destinationPath('src/views/index.pug'), { name: this.props.name, tagLine: this.props.tagLine, gitHub: this.props.gitHub, linkedIn: this.props.linkedIn });
	}

	install() {
		this.installDependencies({npm: true, bower: false, yarn: false});
	}
};
